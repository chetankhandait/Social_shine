import React from "react";

const Testimonial = () => {
  return (
    <div>
      <section className="bg-[#F4F4F4]  ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center  0 capitalize lg:text-3xl  ">
            What clients saying
          </h1>

          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
          </div>

          <div className="flex items-start max-w-6xl mx-auto mt-16">
            <button
              title="left arrow"
              className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div>
              <p className="flex items-center text-center text-gray-500 lg:mx-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, quam. Odio voluptatem officiis eos illo! Pariatur,
                totam alias. Beatae accusamus earum quos obcaecati minima
                molestias. Possimus minima dolores itaque! Esse! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Ea voluptates
                fugiat corrupti laudantium dolores reiciendis pariatur esse quod
                nihil quia cupiditate debitis quisquam nemo, accusamus animi
                explicabo? Architecto, unde laboriosam?
              </p>

              <div className="flex flex-col items-center justify-center mt-8">
                <img
                  className="object-cover rounded-full w-14 h-14"
                  src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="mt-4 text-center">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Mia Brown
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Marketer
                  </span>
                </div>
              </div>
            </div>

            <button
              title="right arrow"
              className="hidden p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:block hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
// import React, { useState } from "react";
// // import "./Testimonial.css";
// const Testimonial = () => {
//   const [selected, setSelected] = useState(0);
//   const tabs = [
//     {
//       title: "Murcielago",
//       icon: "M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z",
//       content:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras sed felis eget velit aliquet sagittis id consectetur purus. Habitant morbi tristique senectus et netus. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Amet purus gravida quis blandit. Nisi est sit amet facilisis magna etiam.",
//     },
//     {
//       title: "Monolith",
//       icon: "M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z",
//       content:
//         "Faucibus purus in massa tempor nec feugiat nisl. Sodales ut etiam sit amet nisl purus. Sit amet porttitor eget dolor morbi non. Risus in hendrerit gravida rutrum quisque non tellus. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vehicula ipsum a arcu cursus.",
//     },
//     {
//       title: "Perseides",
//       icon: "M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z",
//       content:
//         "Et odio pellentesque diam volutpat commodo sed egestas egestas. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Volutpat consequat mauris nunc congue nisi vitae. Integer vitae justo eget magna fermentum.",
//     },
//     {
//       title: "Supabase",
//       icon: "M19 19v4a4 4 0 1 0 4-4h-4Zm0 0v-6m0 6h-6m6-6V9a4 4 0 1 1 4 4h-4Zm0 0h-6m-4 0h-.007m0 0A4 4 0 1 1 13 9v4m-4.007 0H13m0 0v6m0 0v4a4 4 0 1 1-4-4h4Z",
//       content:
//         "Viverra vitae congue eu consequat. Dui accumsan sit amet nulla facilisi. Imperdiet sed euismod nisi porta. Sed augue lacus viverra vitae congue eu consequat ac felis. Vitae congue mauris rhoncus aenean vel. Varius morbi enim nunc faucibus a pellentesque. Tincidunt eget nullam non nisi est sit. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Suscipit tellus mauris a diam maecenas. Cum sociis natoque penatibus et magnis dis. Sed tempus urna et pharetra pharetra massa. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Elementum nibh tellus molestie nunc non blandit massa. Vitae et leo duis ut diam quam. Nulla facilisi etiam dignissim diam quis enim lobortis. Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Lobortis mattis aliquam faucibus purus in massa. Tortor condimentum lacinia quis vel eros donec. Lectus mauris ultrices eros in cursus turpis massa. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim.",
//     },
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//       <main
//         className="
//           relative
//           max-w-xl
//           mx-auto
//           mt-10
//           mb-20
//           bg-white
//           py-8
//           px-10
//           rounded-md
//           shadow-md
//         "
//       >
//         <menu className="absolute top-10 -left-16 bg-gray-900 w-16 rounded-l-md">
//           <ul>
//             {tabs.map((tab, index) => (
//               <li key={index}>
//                 <button
//                   className={`text-gray-400 hover:text-white block w-full p-3 ${
//                     selected === index ? "text-white" : ""
//                   }`}
//                   onClick={() => setSelected(index)}
//                 >
//                   <span className="block w-8 mx-auto">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
//                       <path
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         d={tab.icon}
//                       />
//                     </svg>
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </menu>
//         <article>
//           <h1 className="text-2xl font-bold">{tabs[selected].title}</h1>
//           <hr className="my-4" />
//           <p className="mb-2 leading-relaxed">{tabs[selected].content}</p>
//         </article>
//       </main>
//       {/* Start Background Animation Body */}
//       <div className="area fixed inset-0 pointer-events-none">
//         <ul className="circles">
//           {Array.from({ length: 10 }).map((_, index) => (
//             <li key={index} className="bg-black"></li>
//           ))}
//         </ul>
//       </div>
//       {/* End Background Animation Body */}
//     </div>
//   );
// };

// export default Testimonial;
