const SkewedInfiniteScroll = () => {
  const items = [
    { id: "1", text: "404" },
    { id: "2", text: "404" },
    { id: "3", text: "404" },
    { id: "4", text: "404" },
    { id: "5", text: "404" },
    { id: "6", text: "404" },
    {
      id: "7",
      text: "404",
    },
    {
      id: "8",
      text: "404",
    },
  ];
  return (
    <div className="h-screen w-full bg-[#09090b] flex items-center justify-center">
      <div className="">
        <div className="relative w-full max-w-screen-lg overflow-hidden">
          <div className="pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-[#09090b]"></div>
          <div className="pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-[#09090b]"></div>
          <div className="pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-[#09090b]"></div>
          <div className="pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-[#09090b]"></div>

          <div className="animate-skew-scroll mx-auto grid h-[250px] w-[300px] grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex cursor-pointer items-center space-x-2 rounded-md border text-center border-gray-100 px-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 flex-none text-[#57ec90]"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <p className="text-[#fafafa]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkewedInfiniteScroll;
