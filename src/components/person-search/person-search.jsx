import { tw, setup as twindSetup } from 'twind';
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import { Combobox, Dialog, RadioGroup, Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import debounce from 'lodash/debounce';

import { useIsOpen } from './use-is-open';

import { useSearch } from './api';

twindSetup({
  hash: true,
});

export function PersonSearch() {
  const [searchString, setSearchString] = useState('');
  const [searchType, setSearchType] = useState('coordinator');
  const [showInactives, setShowInactives] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState();

  // Managing the open state of the component is extracted to a custom hook because it
  // contains the logic for displaying the dialog when appropriate key combo is pressed
  const [isOpen, setIsOpen] = useIsOpen();

  // Async state (i.e., search results)
  const { results, isLoading, isError } = useSearch({
    searchString,
    searchType,
  });

  // Computed state
  const isCoordinatorSearch = searchType === 'coordinator';
  const inactiveCount = useMemo(
    () =>
      isCoordinatorSearch && results?.length > 0
        ? results.filter((r) => !r.Is_Active).length
        : 0,
    [results, isCoordinatorSearch]
  );

  // Store ref to search input so we can mark it to receive focus when dialog opens
  const searchInput = useRef();

  // Input change handler is debounced to prevent too many calls to API
  const debouncedChangeHandler = useMemo(
    () => debounce((e) => setSearchString(e.target.value.trim()), 300),
    []
  );

  // Navigate to person's profile when selected
  useEffect(() => {
    if (!selectedPerson) return;

    if (selectedPerson?.PassID) {
      window.location.href = `/interface_customer_overview.aspx?PassID=${selectedPerson.PassID}`;
      return;
    }

    window.location.href = `/interface_physician_3.asp?PIN=${selectedPerson.PIN}`;
  }, [selectedPerson]);

  function resetSearchState() {
    setSearchString('');
    setShowInactives(false);
  }

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={resetSearchState}>
      <Dialog
        className={tw`fixed inset-0 z-10 overflow-y-auto p-4 pt-[25vh]`}
        initialFocus={searchInput}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter={tw`ease-out duration-300`}
          enterFrom={tw`opacity-0`}
          enterTo={tw`opacity-100`}
          leave={tw`ease-in duration-200`}
          leaveFrom={tw`opacity-100`}
          leaveTo={tw`opacity-0`}
        >
          <Dialog.Overlay
            className={tw`fixed inset-0 bg-gray-500 bg-opacity-75`}
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter={tw`ease-out duration-300`}
          enterFrom={tw`opacity-0 scale-95`}
          enterTo={tw`opacity-100 scale-100`}
          leave={tw`ease-in duration-200`}
          leaveFrom={tw`opacity-100 scale-100`}
          leaveTo={tw`opacity-0 scale-95`}
        >
          <Combobox
            as="div"
            value={selectedPerson}
            className={tw`relative mx-auto w-full max-w-xl divide-y overflow-hidden rounded-xl bg-white text-sm shadow-2xl ring ring-black ring-opacity-5`}
            onChange={setSelectedPerson}
          >
            <SearchTypeSelection
              searchType={searchType}
              onChange={setSearchType}
            />

            <div className={tw`relative flex items-center px-4`}>
              <SearchIcon className={tw`h-6 w-6 text-gray-500`} />
              <Combobox.Input
                ref={searchInput}
                type="search"
                className={tw`h-12 w-full bg-transparent p-2 focus:outline-none`}
                placeholder="Search..."
                displayValue={(person) => (person ? selectedPerson.Name : '')}
                onChange={debouncedChangeHandler}
              />
              {isLoading && <Spinner />}
            </div>
            {isCoordinatorSearch && inactiveCount > 0 && (
              <div className={tw`flex justify-end p-4`}>
                <label
                  className={tw`mb-0 flex items-center gap-x-1 font-normal`}
                >
                  <input
                    type="checkbox"
                    checked={showInactives}
                    onChange={(e) => setShowInactives(e.target.checked)}
                  />
                  <span className={tw`text-gray-600`}>
                    Include {inactiveCount} Inactives
                  </span>
                </label>
              </div>
            )}

            {isError && (
              <div className={tw`p-4 text-sm text-red-600`}>
                There was an error retrieving results
              </div>
            )}

            {results?.length > 0 && (
              <Combobox.Options
                className={tw`max-h-96 divide-y overflow-y-auto py-4 text-sm`}
                static
              >
                {results.map((person) =>
                  isCoordinatorSearch ? (
                    (person.Is_Active || showInactives) && (
                      <CoordinatorOption key={person.PassID} person={person} />
                    )
                  ) : (
                    <ParticipantOption key={person.PIN} person={person} />
                  )
                )}
              </Combobox.Options>
            )}
            {searchString && !isLoading && results?.length === 0 && (
              <p className={tw`p-4 text-sm text-gray-600`}>No results found.</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}

// ---

function SearchTypeSelection({ searchType, onChange }) {
  return (
    <RadioGroup
      value={searchType}
      className={tw`flex items-center gap-2 p-2`}
      onChange={onChange}
    >
      <RadioGroup.Label className={tw`sr-only`}>Search Type</RadioGroup.Label>
      <RadioGroup.Option
        value="coordinator"
        className={tw`flex-1 cursor-pointer rounded-lg ring-purple-500 ring-offset-1 focus:outline-none focus:ring-2`}
      >
        {({ checked }) => (
          <div
            className={tw`rounded-lg border p-2 text-center transition ${
              checked
                ? 'border-purple-500 bg-purple-100'
                : 'border-transparent hover:bg-gray-100'
            }`}
          >
            Coordinator
          </div>
        )}
      </RadioGroup.Option>
      <RadioGroup.Option
        value="provider"
        className={tw`flex-1 cursor-pointer rounded-lg ring-purple-500 ring-offset-1 focus:outline-none focus:ring-2`}
      >
        {({ checked }) => (
          <div
            className={tw`rounded-lg border p-2 text-center transition ${
              checked
                ? 'border-purple-500 bg-purple-100'
                : 'border-transparent hover:bg-gray-100'
            }`}
          >
            Provider
          </div>
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
}

// ---

function CoordinatorOption({ person }) {
  return (
    <Combobox.Option value={person} className={tw`cursor-pointer`}>
      {({ active }) => (
        <div
          className={tw`flex items-center justify-between px-4 py-2 ${
            active ? 'bg-purple-600' : 'bg-white'
          }`}
        >
          <div>
            <div className={tw`flex items-center gap-x-1`}>
              <div
                className={tw({
                  'text-white': active,
                  'line-through': !person.Is_Active,
                })}
              >
                {person.Name}
              </div>
              {person.Is_Full_Sponsor && <Badge active={active}>Admin</Badge>}
            </div>
            <div
              className={tw`flex text-xs ${
                active ? 'text-purple-200' : 'text-gray-500'
              }`}
            >
              <span>{person.Sponsor_Name}</span>
            </div>
          </div>
          <div
            className={tw`flex flex-col tabular-nums items-end${
              active && 'text-white'
            }`}
          >
            <span className={tw`tabular-nums`}>{person.PassID}</span>
          </div>
        </div>
      )}
    </Combobox.Option>
  );
}

// ---

function ParticipantOption({ person }) {
  return (
    <Combobox.Option value={person} className={tw`cursor-pointer`}>
      {({ active }) => (
        <div
          className={tw`flex items-center justify-between px-4 py-2 ${
            active ? 'bg-purple-600' : 'bg-white'
          }`}
        >
          <div>
            <div className={tw`${active && 'text-white'}`}>{person.Name}</div>
            <div
              className={tw`text-xs ${
                active ? 'text-purple-200' : 'text-gray-500'
              }`}
            >
              {person.City}, {person.State}
            </div>
          </div>
          <div className={tw`tabular-nums ${active && 'text-white'}`}>
            {person.PIN}
          </div>
        </div>
      )}
    </Combobox.Option>
  );
}

// ---

function Badge({ active, children }) {
  return (
    <span
      className={tw`rounded-lg px-1 text-xs font-medium ${
        active ? 'bg-white text-purple-600' : 'bg-purple-50 text-purple-500'
      }`}
    >
      {children}
    </span>
  );
}

// ---

function Spinner() {
  return (
    <svg
      className={tw`absolute right-5 h-5 w-5 animate-spin text-gray-700`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className={tw`opacity-25`}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className={tw`opacity-75`}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}
