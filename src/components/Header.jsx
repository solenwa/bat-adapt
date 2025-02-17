'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex w-screen justify-between p-6 lg:px-8 lg:gap-x-12"
      >
        <div className="flex lg:flex-1">
          <Link to="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Resilience For Real Estate</span>
            <img
              alt="Resilience For Real Estate's logo"
              src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden items-center lg:flex lg:gap-x-10">
          <Link
            href="#"
            className="text-base/6 font-semibold hover:border-b-2 hover:border-sangirblue"
          >
            Accueil
          </Link>
          <Link
            to="#"
            className="text-base/6 font-semibold hover:border-b-2 hover:border-sangirblue"
          >
            Les outils
          </Link>

          <Link
            to="#"
            className="text-base/6 font-semibold hover:border-b-2 hover:border-sangirblue"
          >
            À propos
          </Link>
          <Link
            to="#"
            className="text-base/6 font-semibold hover:border-b-2 hover:border-sangirblue"
          >
            Documentation
          </Link>
          <Link
            to="#"
            className="text-base/6 font-semibold hover:border-b-2 hover:border-sangirblue"
          >
            Contact
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:gap-x-4">
          <button
            type="button"
            className="bg-sangirblue -m-1 p-2 text-white rounded-2xl"
          >
            <a href="#" className="text-base/6 font-semibold">
              Créer un compte
            </a>
          </button>
          <button
            type="button"
            className="bg-white border-2 border-sangirblue p-2 text-sangirblue rounded-2xl"
          >
            <a href="#" className="text-base/6 font-semibold">
              Se connecter
            </a>
          </button>
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Resilience For Real Estate</span>
              <img
                alt=""
                src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 "
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Les outils
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  À propos
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Créer un compte
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Se connecter
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;
