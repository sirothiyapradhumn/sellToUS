import Image from "next/image";
import SelltousIcon from "../../../public/sellToUs/vsell-to-us.jpg";

export default function SellToUS() {
  return (
    <div className="w-full max-w-[1200px]">
      <div className="pt-[35px] px-0 pb-[25px] text-center font-bold text-[33px]">
        Sell Your Gold and Silver Bullion
      </div>
      <div className="flex mb-[30px] w-full border-[1px] border-[solid] border-[#ccc] pt-[30px] pl-[30px] pb-[20px] pr-[30px]">
        <div className="flex-[1_0_38%] flex flex-col items-center">
          <Image
            className=""
            src="/sellToUs/vsell-to-us.jpg"
            alt="SelltousIcon"
            width={260}
            height={0}
          />
          <div className="font-semibold text-[13px] mt-[10px]">
            * Please note our minimum purchase amount is $1,000.
          </div>
        </div>
        <div className="text-[16px] flex flex-col items-center">
          <div className="pb-[30px]">
            JM Bullion is proud to offer the only do-it-yourself Sell-To-Us tool
            in the industry. That&apos;s right, you can lock in your price
            online 24/7 without ever speaking to our Sell-To-Us specialists.
          </div>
          <div className="pb-[30px]">
            The process is simple. First, login to your JM Bullion account or
            click here to create one. Then, click the button below and you will
            be sent to a new page where you can select the product(s) you&apos;d
            like to sell, input your quantity, and fill out your information to
            complete the sale order.
          </div>
          <div className="pt-[10px]">
            <button className="h-[60px] text-[#7a4e00] font-bold cursor-pointer rounded-[4px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] w-[400px] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
              Sell to Us Online
            </button>
          </div>

          <div className="pt-[10px] font-semibold text-[18px]">
            Prefer to sell over the phone? No problem
          </div>
          <div className="flex gap-[30px] mx-[0] my-[0.6rem]">
            <div className="flex items-center gap-[15px]">
              <Image
                className=""
                src="/sellToUs/phone-ring-icon.png"
                alt="phone-ring-icon"
                width={22}
                height={22}
              />
              <div className="underline text-[#114e88] font-semibold text-[18px]">
                844-258-2538
              </div>
            </div>
            <div className="border-r border-gray-300" />
            <div className="flex items-center gap-[15px]">
              <Image
                className=""
                src="/sellToUs/msg-icon.png"
                alt="msg-icon"
                width={22}
                height={22}
              />
              <div className="underline text-[#114e88] font-semibold text-[18px]">
                SellToUs@jmbullion.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-[30px] w-full border-[1px] border-gray-300 p-[30px]">
        <div className="font-bold text-[25px] w-full text-center pb-[29px]">
          How it Works:
        </div>
        <div className="flex items-center w-[72%]">
          <div className="relative flex flex-col items-center">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              1
            </div>
            <div className="absolute top-1/2 w-full -z-10 h-1 bg-yellow-400 left-5"></div>
          </div>

          <div className="relative flex flex-col items-center w-full">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              2
            </div>
            <div className="absolute bg-[#f2c568] w-full h-[5px] top-2/4 -z-10"></div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="bg-[#f2c568] h-[48px] w-[48px] rounded-[50%] text-[#fff] text-[20px] flex justify-center items-center font-medium">
              3
            </div>
          </div>
        </div>
        <div className="flex gap-[10px] pt-[20px] justify-around">
          <div className="flex flex-col w-[28%]">
            <div className="pb-[10px] text-center text-[17px] font-semibold">
              Get a Quote or Lock in a Price
            </div>
            <div>
              <ul>
                <li className="list-disc mb-[10px]">
                  Use the Sell to Us Online button above to select the products
                  you want to sell.
                </li>
                <li className="list-disc mb-[10px]">
                  If you do not see your products listed, feel free to email or
                  call us.
                </li>
                <li className="list-disc mb-[10px]">
                  Once you are ready, checkout to lock in your price.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[28%]">
            <div className="pb-[10px] text-center text-[17px] font-semibold">
              Ship Your Products to Us
            </div>
            <div>
              <ul>
                <li className="list-disc mb-[10px]">
                  Once you have locked in your sale, you will receive an email
                  with mailing instructions.
                </li>
                <li className="list-disc mb-[10px]">
                  Please follow the instructions exactly to ensure safe arrival
                  of your products.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-[28%]">
            <div className="pb-[10px] text-center text-[17px] font-semibold">
              Receive Payment
            </div>
            <div>
              <ul>
                <li className="list-disc mb-[10px]">
                  Once we receive your package, our inventory team will inspect
                  each item and approve the sale.
                </li>
                <li className="list-disc mb-[10px]">
                  After approval, your payment will be issued.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[343px] ml-[0] mr-[0] my-[30px] relative bg-[url('/sellToUs/gold-silver-jewelry.png')]">
        <div className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_.7)_12.8%,_rgba(0,_0,_0,_.4)_48.81%,_rgba(0,_0,_0,_.6)_84.82%)] w-full h-full z-10 absolute"></div>
        <div className="w-full text-[#fff] absolute top-1/4 gap-[10px] flex flex-col items-center z-20">
          <div className="text-[36px] m-0 font-[TrajanProBold] font-semibold">
            We Buy Jewelry, Scrap, and Silverware!
          </div>
          <div className="text-[30px] italic font-normal">
            Free Insured Shipping & Returns
          </div>
          <button className="ml-[auto] mr-[auto] my-[20px] px-[20px] py-[10px] text-[20px] text-[#7a4e00] font-bold cursor-pointer rounded-[4px] border-[solid] border-[thin] border-[#9B9B9B] bg-[linear-gradient(#FADB99,_#edbb56)] hover:bg-[linear-gradient(#F7D185,_#EFC468)]">
            Click Here to Learn More
          </button>
        </div>
      </div>
      <div>
        <div className="text-[25px] font-bold text-center pb-[30px]">
          Why Sell to JM Bullion
        </div>
        <div>
          <div className="flex gap-[20px]">
            <div className="bg-[#11355B] text-[#FFFFFF] border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center w-[calc((100%-40px)/3)]">
              <Image
                className="mb-[20px]"
                src="/sellToUs/vbb-leader.png"
                alt="vbb-leader"
                width={100}
                height={100}
              />
              <div className="mb-[20px] font-semibold text-[17px]">
                Trusted Leader
              </div>
              <div className="text-[15px] text-center">
                We purchase tens of millions in product from our customers each
                month.
              </div>
            </div>
            <div className="border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center w-[calc((100%-40px)/3)]">
              <Image
                className="mb-[20px]"
                src="/sellToUs/vbb-pricing.png"
                alt="vbb-pricing"
                width={100}
                height={100}
              />
              <div className="mb-[20px] font-semibold text-[17px]">
                Transparent Pricing
              </div>
              <div className="text-[15px] text-center">
                Our Sell-To-Us prices are clearly published on the website for a
                majority of our most popular products.
              </div>
            </div>
            <div className="bg-[#11355B] text-[#FFFFFF] border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center w-[calc((100%-40px)/3)]">
              <Image
                className="mb-[20px]"
                src="/sellToUs/vbb-rates.png"
                alt="vbb-rates"
                width={100}
                height={100}
              />
              <div className="mb-[20px] font-semibold text-[17px]">
                Industry Leading Rates
              </div>
              <div className="text-[15px] text-center">
                We continually update our prices based on current market
                conditions.
              </div>
            </div>
          </div>
          <div className="flex gap-[20px]">
            <div className="border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center w-[calc((100%-40px)/3)]">
              <Image
                className="mb-[20px]"
                src="/sellToUs/vbb-shipping.png"
                alt="vbb-shipping"
                width={100}
                height={100}
              />
              <div className="mb-[20px] font-semibold text-[17px]">
                Easy Shipping
              </div>
              <div className="text-[15px] text-center">
                We provide shipping labels, and you can drop off your package at
                a facility or schedule a pickup. You can also choose to ship
                products on your own.
              </div>
            </div>
            <div className="bg-[#11355B] text-[#FFFFFF] border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center w-[calc((100%-40px)/3)]">
              <Image
                className="mb-[20px]"
                src="/sellToUs/vbb-self.png"
                alt="vbb-self"
                width={100}
                height={100}
              />
              <div className="mb-[20px] font-semibold text-[17px]">
                Do-It-Yourself
              </div>
              <div className="text-[15px] text-center">
                No need to speak with anyone. Sell instantly online 24/7.
              </div>
            </div>
            <div className="border-[solid] border-[thin] border-[#C7C7C7] h-[300px] p-[45px] mb-[20px] flex flex-col justify-center items-center w-[calc((100%-40px)/3)]">
              <Image
                className="mb-[20px]"
                src="/sellToUs/vbb-payment.png"
                alt="vbb-payment"
                width={100}
                height={100}
              />
              <div className="mb-[20px] font-semibold text-[17px]">
                Quick Payment
              </div>
              <div className="text-[15px] text-center">
                Receive payment in 1-3 business days after products are
                authenticated.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
