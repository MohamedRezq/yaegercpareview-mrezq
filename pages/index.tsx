import Image from "next/image";
import { Inter } from "next/font/google";
import Feedback from "@/components/Feedback";
import videoLecturesGreen from "../assets/videolecturesgreen.png";
import quizGenerator from "../assets/quizgenerator.png";
import textbooks from "../assets/textbooks.png";
import audiolectures from "../assets/audiolectures.png";
import cramcourses from "../assets/cramcourses.png";
import x2 from "../assets/x2.png";
import Link from "next/link";
import { AiFillStar, AiOutlineCheck } from "react-icons/ai";
import aicpa from "../assets/aicpa.png";
import payfor from "../assets/payfor.png";
import studentsicon from "../assets/students-icon.png";
import whateveryouneed from "../assets/whateveryouneed.png";
import runningman from "../assets/runningman.png";
import salessection from "../assets/salessection.png";
import { BsFillBoxSeamFill } from "react-icons/bs";
import ChatWidget from '../components/ChatWidget';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="my-10 flex flex-col justify-center">
      <div className="text-greenish text-2xl md:text-4xl lg:text-5xl font-bold text-center my-14">
        YAEGER CPA REVIEW FULL COURSE
      </div>
      <div className="grid lg:mx-16 grid-cols-1 lg:grid-cols-2 gap-x-10">
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
            <span className="text-darkish">
              Starting at $91/mo with affirm.
            </span>{" "}
            <Link href="/">Learn more</Link>
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
            <div className="flex items-center">
              <AiOutlineCheck className="mr-5" /> CRAM - Final, Wrap-up, Review
            </div>
            <div className="flex items-center">
              <AiOutlineCheck className="mr-5" /> Audio Lecture Series
            </div>
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
            Starting at $91/mo with
            <span className="text-darkish font-semibold"> affirm</span>
            {". "}
            <Link href="/">Learn more</Link>
          </div>
        </div>
      </div>
      <div className="bg-grayish lg:mx-16 my-10 text-greenish rounded-xl p-10 flex flex-col gap-y-2">
        <div className="mb-3 text-md">Featured Review</div>
        <div className="text-lg font-bold">John T.</div>
        <div className="flex gap-x-2 text-green-500">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <cite>
          &quot;I&apos;m a very visual learner, so the Yaeger CPA review course
          appealed to me because of the amount of lecture video that was
          available. I missed one part (FAR 74) with Yaeger on the first
          attempt, but I only completed 60% of the course. If you completed 100%
          of the course recommendations and didn&apos;t pass I would be shocked.
          The staff is also great to work with. Good luck!&quot;
        </cite>
      </div>
      <div className="text-greenish text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-14 mb-6">
        Why is Yaeger CPA the Best CPA Course?
      </div>
      <div className="text-darkish lg:mx-16 text-md md:text-lg lg:text-xl text-center">
        Our &apos;PHILosophy&apos; for CPA Exam success is built from the
        experience of our lead instructor and founder, Phil Yaeger, PhD, MBA,
        CPA, CGMA.
      </div>
      <div className="grid grid-cols-1 lg:mx-16 my-10 lg:grid-cols-2 gap-10">
        <div className="bg-grayish rounded-2xl flex flex-col items-center justify-start p-10 gap-y-2">
          <Image src={studentsicon} alt="students-icon" height={100} />
          <div className="text-darkish text-2xl text-center mt-10 mb-2">
            Students Over Revenue
          </div>
          <div className="text-darkish text-lg text-center">
            Our priority is to make sure you are confident about taking the CPA
            Exam, going above and beyond to ensure you understand and feel
            prepared.
          </div>
        </div>
        <div className="bg-grayish rounded-2xl flex flex-col items-center justify-start p-10 gap-y-2">
          <Image src={whateveryouneed} alt="whateveryouneed" height={100} />
          <div className="text-darkish text-2xl text-center mt-10 mb-2">
            We Are Here For You Whenever, For Whatever You Need
          </div>
          <div className="text-darkish text-lg text-center">
            Whether you need a pep talk, want to discuss concepts that
            doesn&apos;t make sense, or complain about how no one seems to
            understand what you&apos;re going through, we are always here.
          </div>
        </div>
        <div className="bg-grayish rounded-2xl flex flex-col items-center justify-start p-10 gap-y-2">
          <Image src={payfor} alt="payfor" height={100} />
          <div className="text-darkish text-2xl text-center mt-10 mb-2">
            Pay For Only What You Need
          </div>
          <div className="text-darkish text-lg text-center">
            No one studies for the CPA Exam forever, so why pay thousands of
            dollars more for access that you don&apos;t need? Our program is
            designed to keep you on track and focused on passing the exam within
            your testing window. We have affordable pricing with the option to
            set up a payment plan through Affirm®. Pay now or as you go with our
            easy subscription plan.
          </div>
        </div>
        <div className="bg-grayish rounded-2xl flex flex-col items-center justify-start p-10 gap-y-2">
          <Image src={aicpa} alt="aicpa" height={100} />
          <div className="text-darkish text-2xl text-center mt-10 mb-2">
            AICPA Blueprints - The Path To Success
          </div>
          <div className="text-darkish text-lg text-center">
            Yaeger CPA Review fully integrates the AICPA Blueprints into all
            study materials. Rather than waste time on rote memorization, our
            instructors teach you to understand the concepts and apply your
            critical thinking skills.
          </div>
        </div>
      </div>
      <div className="bg-grayish w-full gap-y-10 grid grid-cols-1 py-10 px-20 lg:grid-cols-3">
        <div className="relative mx-auto p-10 w-60 h-60 bg-white rounded-full">
          <Image
            className="absolute -top-10"
            src={runningman}
            alt="runningman"
            height="350"
          />
        </div>
        <div className="text-greenish text-center col-span-2 mx-auto">
          <div className="text-2xl lg:text-3xl mb-3 font-semibold">
            Most Popular CPA Exam Prep Material
          </div>
          <div className="text-darkish mb-5 text-lg">
            Our CPA Exam prep and study materials are built with the AICPA
            Blueprints and refined with over 43+ years of experience to create
            the most effective learning methods.
          </div>
          <div className="font-semibold">
            WE KNOW WE CAN GET YOU THROUGH THE EXAM !
          </div>
          <button className="mt-3 border-greenish hover:bg-greenish hover:text-white border-2 rounded-3xl bg-white py-2 px-10">
            Get Free Trial
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-3 mx-5 my-20 lg:mx-16">
        <div className="flex flex-col gap-y-5">
          <div className="text-greenish text-4xl mb-8 mt-2">
            All- Access Bundles
          </div>
          <div className="text-darkish text-xl flex flex-col gap-y-3">
            <div className="flex items-start gap-x-5">
              <BsFillBoxSeamFill />
              Comprehensive bundle of resources to ensure Exam success
            </div>
            <div className="flex items-start gap-x-5">
              <BsFillBoxSeamFill />
              Books, video and audio lectures, final review, CPA Exam simulator,
              and more
            </div>
            <div className="flex items-start gap-x-5">
              <BsFillBoxSeamFill />
              Supportive online community and direct access to CPA instructors,
              including Phil Yaeger
            </div>
            <div className="flex items-start gap-x-5">
              <BsFillBoxSeamFill />
              Flexible payment options including a pay-as-you-go subscription
              and interest-free financing plan
            </div>
          </div>
        </div>
        <div className="px-5">
          <Image src={salessection} alt="salessection" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="font-bold text-2xl lg:text-4xl mx-auto">
          Pass The CPA Exam Fast!
        </div>
        <div className="flex flex-col gap-y-2 items-center lg:items-start lg:justify-start">
          <div className="text-2xl lg:text-3xl">
            Start your Free 3-Day Trial
          </div>
          <button className="mt-3 border-greenish hover:bg-greenish hover:text-white border-2 rounded-3xl bg-white py-2 px-10">
            Learn More
          </button>
        </div>
      </div>
      <Feedback />
    </div>
  );
}
