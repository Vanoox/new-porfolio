export default function TrainerProfile() {
  return (
    <section className="flex flex-col w-full max-w-[400px] mx-auto lg:mx-0">
      <div className="w-full aspect-[4/3] bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-3xl overflow-hidden mb-8 shadow-inner border border-gray-50 dark:border-gray-700 flex items-end justify-center">
        <div className="w-3/4 h-[90%] bg-gray-300 dark:bg-gray-600 rounded-t-full relative overflow-hidden flex justify-center items-end">
          <svg
            className="w-full h-full text-gray-400 dark:text-gray-500 absolute bottom-[-10%]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Trainer</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam.
      </p>
    </section>
  );
}
