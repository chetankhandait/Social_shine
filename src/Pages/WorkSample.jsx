import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SeprateNavbar from "./SeprateNavbar";
import backgroundImage from "/bg.jpeg";
const WorkSample = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <section className="relative bg-black text-white m-4 rounded-2xl h-96">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50 "
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="relative z-10 max-w-6xl mx-auto px-5 py-24">
            <div className="text-center">
              <p className="mb-5">What we work</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Portfolio
              </h2>
              <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl mt-4">
                The Future of Marketing
              </h1>
            </div>
          </div>
        </section>

        <div className="w-[94%] mt-10  mx-auto ">
          <div>
            <div className="mt-24 flex flex-col gap-10">
              <div className="flex flex-col items-center gap-10 sm:flex-row ">
                <div className="w-full sm:w-1/2 flex items-start flex-col    ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/ba72/13b1/612b46a781c9da6a0bc9ae3d8c52a0b8?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aBULK-LOi2oKam5Vns-qx6NJMb6Gl-pBnEcj1bTFpxTdHEem53Y4opTgAJoeKOk7aiUbe7KowqiJjGuOviqQk0-WLUtHnn59wmW6K0G-aXh3-1olRflleZxbc29n6fpuYIc1T46zxq8GXqdW3ejevn4zMFhchrSqEKi7m5PJbCm-hlkFnqwEokdYQpv631XqzvK~YsFEqUcAHmX~tNhpho0UXIsL2fAUKT0oD8frPAifnmwCxFQthdO~tneVu29dpfKDJC-gpHmFExGiARckXcYcKZxpwneK2zstkC4QEJHHalxG-LEN4twegh3ThPQN5hgxBWSOsGNDUbP~B0ioGg__"
                    alt=""
                    className="  rounded-xl w-[663px] h-[450px] object-cover"
                  />
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">Web UI design</h2>
                    <h2 className="text-lg">Creative UI design</h2>
                  </div>
                </div>
                <div className="w-full sm:w-1/2  ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/b701/f9bc/d7311f5c3c28d6e631ab9a8817cee5ae?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R1ck8fkeJ0ZL7lkYL3ka5h9YuGxGIiJtxy7cQV0Mwnr73TTjfspkADW1oHlX5AEEhErqd0B0FePu93j7ACu~K~sgOHfY4Fmut6OZzwz897Z5C6Gs7YKavVnZAinJ3rIgzb4FF~rYK1Ik61ObPrsHHQRf8yjwLL4bqtQM5x1HvqGMKJYjGzCGHFQJsXog~2uLcsktqplADGsFBe6stA6vypKYWgW5-NqDW4FJ-jupQQGWeb-uwwEx9Y4Mc3Ae6ZXo6Koi4AITwuuqxcZcaH4urYRiQb1xFA0fG7fNNv4nnsxVp7FBM1sy8rxLWLiOtA1FO3Qqmd9Pvz5iy9MFVr~iCQ__"
                    alt=""
                    className="  rounded-xl w-[663px] h-[450px] object-cover"
                  />
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">Web UI design</h2>
                    <h2 className="text-lg">Creative UI design</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 sm:flex-row ">
                <div className="w-full sm:w-1/2    ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/ecca/9dbb/e201adce7b6516ccd3f19b7d9773951b?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qM0q4g9dkUFZcB2N-Zh4XM0Z~IRhJooqJCBwaxhf9jPjv3fWTbXR2AkoZP~9Xn5D8KyNUjj6z2pYeefxqe42YM-Mp0VRfadANFKCCQv9BM8Hz3r4uorRMOqeN6GiehUL-uJYc1NI761grTF5n6EH79pLOzfjR28mW1u1G0CyqvtuZtQNFj2JtyKuTNsBedxy9VoOB6OR~dfEBfi0vawXg1ExupHlbwxXRM6cdOTz5--d0vxPrqMl0qzpdQ6TtzJh~B4VMdikMLf4QenT1FBePhNshffp5OSv41S51atjXPmSAu-miyslk4HZndkrwZowsK2W~yb7a9VGTOT8CU3Yxg__"
                    alt=""
                    className="rounded-xl   w-[663px] h-[450px] object-cover"
                  />
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">Web UI design</h2>
                    <h2 className="text-lg font-sans">Creative UI design</h2>
                  </div>
                </div>
                <div className="w-full sm:w-1/2  ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/de80/619d/e4c654e21703ebf15f9af5f9c2c24500?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MB9t~CJWRVx8xj1m90Vs14nYLHuzRu5ZcLBkJLrPu7njvqG5XlSmtvcaSsSEkPx~3lXL8FYenNOaogbQMbvxEXU4CDNNQ4tS15j3gHZUJVCRe1VsnSBRjkuaVkPGQ60hYUpKlOR5bxvkid0sGjCBhfosj6EHjZFzKTCkadwVKVHm08IzuX6yIocXIgnkG9t4NRXuybkUpwZAnNCjvxcheXIvG9qzzXUOw28Y0Ea5SP7519L-1xgPGm1wHXzLaOgnM2LXzytWeTzIeRD1eLPkW2vDUkz~x1gWvGSDnMcIoGL-bd2Ic1zudnqivPgZO4zOtR~0gtR1RGAvitkAQiw3MA__"
                    alt=""
                    className="rounded-xl   w-[663px] h-[450px] object-cover"
                  />
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">Web UI design</h2>
                    <h2 className="text-lg">Creative UI design</h2>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-10 sm:flex-row  ">
                <div className="w-full sm:w-1/2      ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/4565/299f/0dadfbfc2b968afed5c9d5b0156c833c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9f7C~TLP6X54aRO96e0vKP3ePnDCEuG0v7ImoAN3KbIoQ3wupfRoQToIni-eL~vPzW2rIWOlTa0Gdwc66vur08koShWml3K3Ygid58QqgyNEKLHxsmcuN7OHxmA3ksRRTq4RY2DJOkTBngXheXxkyUPZZWZHA66NTBMk4Ak~5RQv6URou~FAQlWoSRMxFbEyIn0xujxBUIrHxFsagzuY0O7qC1UErO7YV6EZxKD620uHlMjJZUqMTr98W0rUeSxCqN3NlD9m5CL22AMJn7zCNc1K~rS1wHJm2D9hKNcOmcvF76ITViTTIZiDjbEqyMMSuaYhXPryeucgWr4vzZ~Fw__"
                    alt=""
                    className="rounded-xl   w-[663px] h-[450px] object-cover"
                  />
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">Web UI design</h2>
                    <h2 className="text-lg">Creative UI design</h2>
                  </div>
                </div>
                <div className=" w-full sm:w-1/2   ">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/8955/2532/bf034f1dbc4363a93c18d5fe3e05391d?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OtMmdC2V18400kkR3SP9ldPKrThGbj7Z5mqXsSIlQaE9GXnajypO0lmc5UDSXDLPs7wZBvc1tIQV6ftsFo-U0ydm64uc8yKIl2YXQ~n~ZfkCzVZgISqWRfw2QW-BkbzwWoivTYuGKqiFOIIdrlQQevc7ethN0VYvaumJzTsJHjvrPy-UxH385erqrCFV51DHfWzBK~405Macymi3CvYIOqsfVrXN8w4Rq0t9iRc9nO~VDVc1dRHlVnuvZbd3zATxXlrSe5rA4gxh9WDaoEVfn-j7wDe3Btj-MMPoOzWMvFEhuBq0LW9k4jIP5LpHmDWzQM9pqA2ENtmzW17IhzGUyw__"
                    alt=""
                    className="rounded-xl w-[663px] h-[450px] object-cover"
                  />
                  <div className="text-left">
                    <h2 className="text-3xl font-bold">Web UI bug</h2>
                    <h2 className="text-lg">Creative UI design</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // banner */}
          <div className="my-10">
            <div className=" relative  flex items-center justify-center flex-col rounded-lg">
              <div className="bg-[#121212CC] absolute w-full h-[209px] rounded-3xl"></div>
              <img
                src="./bg.jpeg"
                alt=""
                className="w-[1400px]
            h-[209px] object-cover"
              />
              <div className="text-center absolute top-1/4 flex flex-col gap-8 items-center">
                <h2 className="text-4xl text-white">
                  Enough talk, let’s get to work
                </h2>
                <button className="border px-4 py-1 rounded-full text-white">
                  Get in touch{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkSample;
