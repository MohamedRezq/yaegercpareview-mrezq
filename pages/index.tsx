import Image from "next/image";
import { Inter } from "next/font/google";
import Feedback from "@/components/Feedback";
import Chat from "@/components/Chat";
import videoLecturesGreen from "../assets/videolecturesgreen.png";
import quizGenerator from "../assets/quizgenerator.png";
import textbooks from "../assets/textbooks.png";
import audiolectures from "../assets/audiolectures.png";
import cramcourses from "../assets/cramcourses.png";
import x2 from "../assets/x2.png";
import Link from "next/link";
import {AiFillStar, AiOutlineCheck} from 'react-icons/ai';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="my-10 mx-10">
      <div className="text-greenish text-2xl md:text-4xl lg:text-5xl font-bold text-center my-14">
        YAEGER CPA REVIEW FULL COURSE
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
        <div className="bg-grayish rounded-2xl flex flex-col items-center justify-center p-10 gap-y-2">
          <Image src={videoLecturesGreen} alt="Video Lectures" width={100} />
          <div className="text-greenish text-3xl text-center my-5">
            Video Lectures
          </div>
          <div className="text-darkish text-lg">
            Watch video lectures like never before, with an in-depth textbook
            and content synchronization. These comprehensive videos will cover
            every aspect of the exam you will need to know. Our CPA review
            instructors will give you an in-depth look at the knowledge and
            implementation of materials you will be tested on, including
            complete AICPA blueprints.
          </div>
        </div>
        <div className="bg rounded-2xl flex flex-col items-center justify-center p-5 gap-y-2">
          <div className="text-greenish text-3xl text-center my-5">
            Included in Course
          </div>
          <div className="text-darkish text-md w-full grid grid-cols-3">
            <div className="flex flex-col gap-y-2 mx-auto">
              <div className="border border-greenish w-28 h-28 rounded-full flex items-center justify-center">
                <Image
                  src={videoLecturesGreen}
                  alt="Video Lectures"
                  width={50}
                  height={50}
                />
              </div>
              Video Lectures
            </div>
            <div className="flex flex-col gap-y-2 mx-auto">
              <div className="border border-greenish w-28 h-28 rounded-full flex items-center justify-center">
                <Image
                  src={quizGenerator}
                  alt="Testbank Software"
                  width={50}
                  height={50}
                />
              </div>
              Testbank Software
            </div>
            <div className="flex flex-col gap-y-2 mx-auto">
              <div className="border border-greenish w-28 h-28 rounded-full flex items-center justify-center">
                <Image
                  src={textbooks}
                  alt="Textbooks-pdf"
                  width={50}
                  height={50}
                />
              </div>
              Textbooks-pdf
            </div>
          </div>
          <div className="text-greenish text-3xl text-center my-5 mt-10">
            Basic Plus also Contains
          </div>
          <div className="text-darkish text-md w-full grid grid-cols-2">
            <div className="flex flex-col gap-y-2 mx-auto">
              <div className="border border-greenish w-28 h-28 rounded-full flex items-center justify-center">
                <Image
                  src={audiolectures}
                  alt="Audio Lectures"
                  width={50}
                  height={50}
                />
              </div>
              Audio Lectures
            </div>
            <div className="flex flex-col gap-y-2 mx-auto">
              <div className="border border-greenish w-28 h-28 rounded-full flex items-center justify-center">
                <Image
                  src={cramcourses}
                  alt="CRAM Courses"
                  width={50}
                  height={50}
                />
              </div>
              CRAM Courses
            </div>
          </div>
        </div>
      </div>
      <div className="text-greenish text-xl text-center my-10">
        Order 2023 updated materials below!
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:ml-20">
        <div className="bg-grayish lg:-mr-10 text-greenish shadow-lg shadow-darkish flex flex-col items-center justify-center p-10 gap-y-2">
          <div className="text-4xl text-center">CPA Review Basic</div>
          <div className="text-2xl text-center">FAR + AUD + REG + BEC</div>
          <div className="grid grid-cols-2 gap-x-10 text-3xl my-3 text-center">
            <div className="flex flex-col">
              <div className="relative w-auto">
                $1199
                <Image
                  src={x2}
                  alt="x2"
                  width={30}
                  className="absolute top-0 right-1/2 -mr-5"
                />
              </div>
              <div>$999</div>
              <div className="text-xl">4-parts</div>
            </div>
            <div className="flex flex-col">
              <div className="relative w-auto">
                $349
                <Image
                  src={x2}
                  alt="x2"
                  width={30}
                  className="absolute top-0 right-1/2 -ml-1"
                />
              </div>
              <div>$299</div>
              <div className="text-xl">single part</div>
            </div>
          </div>
          <ul className="list-disc self-start ml-10 lg:w-3/4">
            <li>120+ hours of streaming video lectures</li>
            <li>Online Textbooks synced to Video Lectures</li>
            <li>Downloadable PDF Textbooks</li>
            <li>Multiple Choice Practice Questions</li>
            <li>TestBank: Quiz Generator</li>
            <li>TestBank: Exam Simulator</li>
            <li>
              24-month Access{" "}
              <Link href="/" className="text-inherit font-semibold">
                ...learn more
              </Link>
            </li>
            <li>
              Two 15-minute phone calls with Phil Yaeger to set up a Personal
              Study Plan and Review Progress
            </li>
            <li>
              Contact our instructors directly through our Instructor Hotline
              ($100/hr, 1 hr minimum){" "}
              <Link href="/" className="text-inherit font-semibold">
                ...buy now
              </Link>
            </li>
          </ul>
          <div className="mt-5 text-xl">Build Your CPA Review Course</div>
          <div className="grid grid-cols-2 gap-x-5">
            <div>
              <input type="checkbox" /> FAR
            </div>
            <div>
              <input type="checkbox" /> AUD
            </div>
          </div>
          <div>
            <input type="checkbox" /> All 4 Basic Courses (save $197)
          </div>
          <button className="text-white bg-greenish rounded-xl hover:bg-green-800 text-lg py-2 px-5">
            Add Selected Item(s) to Cart
          </button>
          <div className="text-lg font-semibold">
            <span className='text-darkish'>Starting at $91/mo with affirm.</span>{' '}<Link href='/'>Learn more</Link>
          </div>
        </div>
        <div className="bg-greenish text-white lg:-ml-10 lg:w-3/4 lg:h-11/12 shadow-md shadow-darkish my-auto flex flex-col items-center justify-center p-5 gap-y-2">
        <div className="text-2xl text-center">CPA Review PLUS+</div>
          <div className="grid grid-cols-2 gap-x-10 text-3xl my-3 text-center">
            <div className="flex flex-col">
              <div className="relative w-auto">
                $1,599
                <Image
                  src={x2}
                  alt="x2"
                  width={30}
                  className="absolute top-0 right-1/2 -mr-5"
                />
              </div>
              <div>$1,399</div>
              <div className="text-xl">4-parts</div>
            </div>
            <div className="flex flex-col">
              <div className="relative w-auto">
                $449
                <Image
                  src={x2}
                  alt="x2"
                  width={30}
                  className="absolute top-0 right-1/2 -mr-5"
                />
              </div>
              <div>$399</div>
              <div className="text-xl">single part</div>
            </div>
          </div>
          <div>Everything in Basic</div>
          <div className="text-2xl">+PLUS</div>
          <div className="self-start ml-10 text-lg">
          <div className="flex items-center"><AiOutlineCheck className="mr-5" /> CRAM - Final, Wrap-up, Review</div>
          <div className="flex items-center"><AiOutlineCheck className="mr-5" /> Audio Lecture Series</div>
          </div>
          <div className="mt-5 text-xl">Build Your CPA Review Basic PLUS+</div>
          <div className="grid grid-cols-4 gap-x-5">
            <div>
              <input type="checkbox" /> FAR
            </div>
            <div>
              <input type="checkbox" /> AUD
            </div>
            <div>
              <input type="checkbox" /> REG
            </div>
            <div>
              <input type="checkbox" /> BEC
            </div>
          </div>
          <div>
            <input type="checkbox" /> All 4 Basic PLUS+ Courses (save $197)
          </div>
          <button className="text-greenish bg-white rounded-xl hover:bg-gray-200 text-lg py-2 px-5">
            Add Selected Item(s) to Cart
          </button>
          <div className="text-lg">
            Starting at $91/mo with<span className='text-darkish font-semibold'>{' '}affirm</span>{'. '}<Link href='/'>Learn more</Link>
          </div>
        </div>
      </div>
      <div className="bg-grayish my-10 text-greenish rounded-xl p-10 flex flex-col gap-y-2">
        <div className="mb-3 text-md">Featured Review</div>
        <div className="text-lg font-bold">John T.</div>
        <div className="flex gap-x-2 text-green-500">
          <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
        </div>
        <cite>"I'm a very visual learner, so the Yaeger CPA review course appealed to me because of the amount of lecture video that was available. I missed one part (FAR 74) with Yaeger on the first attempt, but I only completed 60% of the course. If you completed 100% of the course recommendations and didn't pass I would be shocked. The staff is also great to work with. Good luck!"</cite>
      </div>
      <Feedback />
    </div>
  );
}
