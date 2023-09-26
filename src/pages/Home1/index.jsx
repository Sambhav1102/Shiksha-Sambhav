import React from "react";

import { Button, Img, Line, List, Text } from "components";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-ruda items-center justify-start mx-auto w-full">
        <div className="h-[1662px] md:px-5 relative w-full">
          <div className="sm:h-[672px] md:h-[860px] h-[979px] mb-[-307px] mx-auto w-full z-[1]">
            <Img
              className="h-[979px] m-auto object-cover w-full"
              src="images/img_image67.png"
              alt="imageSixtySeven"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[152px] inset-x-[0] items-center justify-start mx-auto top-[5%] w-[84%]">
              <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center rounded-[10px] w-full">
                <Img
                  className="md:flex-1 h-[81px] sm:h-auto ml-6 md:ml-[0] md:mt-0 my-[9px] object-cover w-[14%] md:w-full"
                  src="images/img_image69.png"
                  alt="imageSixtyNine"
                />
                <ul className="flex flex-row gap-[25px] sm:hidden items-start justify-start md:ml-[0] ml-[223px] md:mt-0 my-[38px] p-[5px] w-auto common-row-list">
                  <li>
                    <a href="javascript:" className="text-sm text-teal-A400">
                      <Text size="txtRudaMedium14">Home</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-400 text-sm hover:text-teal-A400"
                    >
                      <Text size="txtRudaMedium14Bluegray400">About</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-400 text-sm hover:text-teal-A400"
                    >
                      <Text size="txtRudaMedium14Bluegray400">Services</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-400 text-sm hover:text-teal-A400"
                    >
                      <Text size="txtRudaMedium14Bluegray400">Reviews</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-blue_gray-400 text-sm hover:text-teal-A400"
                    >
                      <Text size="txtRudaMedium14Bluegray400">Support</Text>
                    </a>
                  </li>
                </ul>
                <a
                  href="javascript:"
                  className="md:ml-[0] ml-[204px] md:mt-0 my-10 text-black-900 text-right text-sm"
                >
                  <Text size="txtRudaMedium14Black900">Sign In</Text>
                </a>
                <Button
                  className="cursor-pointer font-medium min-w-[120px] md:ml-[0] ml-[25px] mr-[22px] md:mt-0 my-[22px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="md"
                  variant="fill"
                >
                  Sign Up
                </Button>
              </header>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[70px] items-start justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[35%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="leading-[65.00px] sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                            size="txtRudaBold50"
                          >
                            <>
                              SHIKSHA <br /> SAMBHAV
                            </>
                          </Text>
                        </div>
                        <Text
                          className="leading-[28.00px] mt-[85px] text-2xl md:text-[22px] text-indigo-100 sm:text-xl w-[96%] sm:w-full"
                          size="txtRudaRegular24"
                        >
                          Shaping tomorrow through Education
                        </Text>
                        <div className="flex flex-row gap-[30px] items-center justify-start mt-[30px] w-[57%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium min-w-[150px] text-center text-sm"
                            shape="round"
                            color="black_900_04"
                            size="lg"
                            variant="fill"
                          >
                            Get Started
                          </Button>
                          <Button
                            className="flex h-[60px] items-center justify-center w-[60px]"
                            shape="circle"
                            color="black_900_05"
                            size="md"
                            variant="fill"
                          >
                            <Img
                              className="h-5"
                              src="images/img_play.svg"
                              alt="play"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[95px] w-[21%] md:w-full">
                      <div className="bg-white-A700_01 flex flex-col items-center justify-start p-[18px] rounded-[10px] shadow-bs2 w-full">
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                          <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-gray-900 text-sm"
                                size="txtRudaBold14"
                              >
                                Skill Progress
                              </Text>
                              <Img
                                className="h-[9px]"
                                src="images/img_group5.svg"
                                alt="groupFive"
                              />
                            </div>
                            <Line className="bg-gray-900_5f h-px w-full" />
                          </div>
                        </div>
                        <div className="bg-blue-50 flex flex-row items-center justify-between mt-[15px] p-[11px] rounded-[10px] w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-teal-A400"
                              size="txtRudaMedium16"
                            >
                              37%
                            </Text>
                            <Text
                              className="text-[10px] text-black-900"
                              size="txtRudaRegular10"
                            >
                              Growth rate
                            </Text>
                          </div>
                          <Img
                            className="h-[21px] mr-[3px]"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                        </div>
                        <div className="bg-blue-50 flex flex-row items-center justify-between mt-2.5 p-[11px] rounded-[10px] w-[99%] md:w-full">
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-base text-teal-A400"
                              size="txtRudaMedium16"
                            >
                              1.65M
                            </Text>
                            <Text
                              className="text-[10px] text-black-900"
                              size="txtRudaRegular10"
                            >
                              New Users
                            </Text>
                          </div>
                          <Img
                            className="h-[26px] mr-[3px]"
                            src="images/img_car.svg"
                            alt="car"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700_b2 flex flex-col items-center justify-start p-[21px] sm:px-5 rounded-[14px] w-[35%] md:w-full">
                    <div className="flex flex-col items-center justify-start my-0.5 w-full">
                      <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Img
                            className="h-8 w-8"
                            src="images/img_straightquotes.svg"
                            alt="straightquotes"
                          />
                          <div className="flex flex-row items-start justify-evenly">
                            <Img
                              className="h-5 w-5"
                              src="images/img_star.svg"
                              alt="star"
                            />
                            <Text
                              className="text-gray-900 text-sm"
                              size="txtRudaMedium14Gray900"
                            >
                              4.9
                            </Text>
                          </div>
                        </div>
                        <Text
                          className="leading-[24.00px] text-black-900 text-sm"
                          size="txtRudaRegular14"
                        >
                          <span className="text-black-900 font-ruda text-left font-normal">
                            <>
                              There’s no shortage of ideas, what’s missing is
                              the <br />
                              will to execute them –{" "}
                            </>
                          </span>
                          <span className="text-black-900 font-ruda text-left font-medium">
                            Seth Godin
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:h-[1355px] h-[990px] mt-auto mx-auto w-full">
            <Img
              className="h-[990px] m-auto object-cover w-full"
              src="images/img_image68.png"
              alt="imageSixtyEight"
            />
            <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[70px] inset-x-[0] items-center justify-end mx-auto p-[72px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-3.5 items-center justify-start mt-[35px] w-[34%] md:w-full">
                <div className="h-[55px] relative w-[64%]">
                  <Text
                    className="m-auto sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900"
                    size="txtRudaBold45"
                  >
                    How it works
                  </Text>
                  <Img
                    className="absolute h-[18px] right-[21%] top-[0]"
                    src="images/img_signal.svg"
                    alt="signal"
                  />
                </div>
                <Text
                  className="leading-[28.00px] text-base text-black-900 text-center w-full"
                  size="txtRudaRegular16"
                >
                  Businesses generally promote their brand, products, and
                  services by identifying audience.
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[91%]"
                orientation="horizontal"
              >
                <div className="hover:border-0 border-2 border-solid hover:cursor-pointer flex flex-col gray_900_5e_gray_900_5e_border items-start justify-start p-[30px] sm:px-5 rounded-[14px] hover:shadow-bs1 hover:w-full w-full">
                  <Img
                    className="h-[70px] w-[70px]"
                    src="images/img_clock.svg"
                    alt="clock"
                  />
                  <Text
                    className="mt-[52px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtRudaMedium24"
                  >
                    Study Resources{" "}
                  </Text>
                  <Text
                    className="leading-[28.00px] mb-7 mt-[11px] text-base text-black-900_01 w-full"
                    size="txtRudaRegular16Black90001"
                  >
                    Easier access of Study materials and various sources.{" "}
                  </Text>
                </div>
                <div className="bg-white-A700_5e hover:border-0 border-2 border-solid hover:cursor-pointer flex flex-col gray_900_5e_gray_900_5e_border2 items-start justify-start p-[30px] sm:px-5 rounded-[14px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full">
                  <Img
                    className="h-[70px] w-[70px]"
                    src="images/img_clock_blue_50.svg"
                    alt="clock"
                  />
                  <Text
                    className="mt-[52px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtRudaMedium24"
                  >
                    Schedule appointment{" "}
                  </Text>
                  <Text
                    className="mb-[59px] mt-[15px] text-base text-black-900"
                    size="txtRudaRegular16"
                  >
                    Schedule an appointment with a mentor.
                  </Text>
                </div>
                <div className="hover:border-0 border-2 border-solid hover:cursor-pointer flex flex-col gray_900_5e_gray_900_5e_border3 items-start justify-start p-[30px] sm:px-5 rounded-[14px] hover:shadow-bs1 hover:w-full w-full">
                  <div className="h-[70px] relative w-[70px]">
                    <Button
                      className="flex h-[70px] items-center justify-center m-auto rounded-[10px] w-[70px]"
                      color="blue_50_cc"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-10"
                        src="images/img_statistics.svg"
                        alt="statistics"
                      />
                    </Button>
                    <div className="absolute backdrop-opacity-[0.5] bg-red-500_33 blur-[10.00px] bottom-[16%] h-[27px] inset-x-[0] mx-auto rounded-[10px] w-[27px]"></div>
                  </div>
                  <Text
                    className="mt-[53px] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                    size="txtRudaMedium24"
                  >
                    Grow together
                  </Text>
                  <Text
                    className="leading-[28.00px] mb-7 mt-2.5 text-base text-black-900_03 w-full"
                    size="txtRudaRegular16Black90003"
                  >
                    Study using the resources and increase your skills. Skill
                    tracker also available.
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[68px] p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start mb-[53px] md:ml-[0] ml-[74px] w-[35%] md:w-full">
            <div className="flex flex-col gap-[18px] items-start justify-start w-[41%] md:w-full">
              <div className="h-14 md:h-[55px] relative w-full">
                <Text
                  className="absolute h-max inset-[0] justify-center m-auto sm:text-[35px] md:text-[41px] text-[45px] text-gray-900 w-max"
                  size="txtRudaBold45"
                >
                  About us
                </Text>
                <Img
                  className="absolute h-[18px] inset-x-[0] mx-auto top-[0]"
                  src="images/img_signal.svg"
                  alt="signal_One"
                />
              </div>
              <Text
                className="text-base text-blue_gray-300"
                size="txtRudaRegular16Bluegray300"
              >
                Content Here
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-32 w-full">
              <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-between w-full">
                <Img
                  className="h-[60px] rounded-[12px] w-[60px]"
                  src="images/img_frame13.svg"
                  alt="frameThirteen"
                />
                <div className="flex flex-col gap-[11px] items-start justify-start">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtRudaMedium20"
                  >
                    Safe and secured
                  </Text>
                  <Text
                    className="leading-[28.00px] text-base text-blue_gray-300 w-full"
                    size="txtRudaRegular16Bluegray300"
                  >
                    <>
                      Safe and secured promotion strategy is one of the most
                      important processes in marketing.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start mt-[30px] w-full">
              <div className="flex sm:flex-col flex-row gap-[25px] items-start justify-between w-full">
                <Img
                  className="h-[60px] rounded-[12px] w-[60px]"
                  src="images/img_frame13_blue_50.svg"
                  alt="frameThirteen_One"
                />
                <div className="flex flex-col gap-[9px] items-start justify-start">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtRudaMedium20"
                  >
                    Highly expert team
                  </Text>
                  <Text
                    className="leading-[28.00px] text-base text-blue_gray-300 w-full"
                    size="txtRudaRegular16Bluegray300"
                  >
                    We supports your marketing voices to reach your target
                    audience, creates interest.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 flex flex-col items-center justify-start mt-[60px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[289px] justify-start md:mt-0 mt-[102px] md:px-5 w-[51%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[135px]">
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                  size="txtRudaBold45"
                >
                  Mentor Access content here
                </Text>
              </div>
              <Img
                className="h-[334px] md:h-auto object-cover"
                src="images/img_group.png"
                alt="group"
              />
            </div>
            <div className="md:h-[436px] h-[674px] md:px-5 relative w-[44%] md:w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[392px] items-end justify-start p-[99px] md:px-10 sm:px-5 right-[0] top-[0] w-[69%]"
                style={{ backgroundImage: "url('images/img_group51.png')" }}
              >
                <Img
                  className="h-[66px] mb-32 mr-9 rounded-[10px]"
                  src="images/img_frame20.svg"
                  alt="frameTwenty"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[436px] left-[0] object-cover w-[57%]"
                src="images/img_universitystud.png"
                alt="universitystud"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="md:h-[1335px] h-[917px] md:px-5 relative w-full">
            <div className="h-[1335px] m-auto w-full">
              <div className="h-[1335px] m-auto w-full">
                <Img
                  className="h-[1335px] m-auto object-cover w-full"
                  src="images/img_image70.png"
                  alt="imageSeventy"
                />
                <Text
                  className="absolute inset-x-[0] mx-auto sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900 top-[24%] w-max"
                  size="txtRudaBold45"
                >
                  Global promotion
                </Text>
              </div>
              <div className="absolute flex flex-col md:gap-10 gap-[186px] h-max inset-[0] justify-center m-auto w-[68%]">
                <Img
                  className="h-[18px] md:ml-[0] ml-[488px]"
                  src="images/img_signal.svg"
                  alt="signal_Two"
                />
                <div
                  className="bg-cover bg-no-repeat sm:h-96 h-[476px] md:h-[546px] p-2 relative w-full"
                  style={{ backgroundImage: "url('images/img_group50.svg')" }}
                >
                  <div className="flex flex-col my-auto w-[94%] md:w-full">
                    <div className="flex flex-col m-auto w-full">
                      <div className="flex flex-col items-center justify-start mx-auto w-full">
                        <div className="flex flex-col justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[54px] w-[95%] md:w-full">
                            <div className="bg-white-A700 flex flex-row gap-[29px] items-center justify-between mb-[9px] md:mt-0 mt-[143px] p-[11px] rounded-[11px] shadow-bs3 w-1/4 md:w-full">
                              <div className="flex flex-row gap-[11px] items-center justify-between w-[83%]">
                                <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[33px] items-center justify-start rounded-[16px] shadow-bs4 w-[33px]">
                                  <Img
                                    className="h-[33px] md:h-auto rotate-[180deg] rounded-[50%] w-[33px]"
                                    src="images/img_image53.png"
                                    alt="imageFiftyThree"
                                  />
                                </div>
                                <Img
                                  className="h-[22px]"
                                  src="images/img_group7.svg"
                                  alt="groupSeven"
                                />
                              </div>
                              <Img
                                className="h-[9px]"
                                src="images/img_group5.svg"
                                alt="groupFive_One"
                              />
                            </div>
                            <Img
                              className="h-[157px] md:h-auto md:ml-[0] ml-[76px] md:mt-0 mt-2 object-cover"
                              src="images/img_group32.png"
                              alt="groupThirtyTwo"
                            />
                            <div className="flex flex-col gap-[7px] justify-start ml-1.5 md:ml-[0] w-[48%] md:w-full">
                              <div className="flex flex-row gap-[5px] items-start justify-end md:ml-[0] ml-[50px] w-[88%] md:w-full">
                                <Img
                                  className="h-[118px] md:h-auto mt-[22px] object-cover"
                                  src="images/img_group31.png"
                                  alt="groupThirtyOne"
                                />
                                <div className="bg-white-A700 flex flex-row gap-[29px] items-center justify-between mb-[85px] p-[11px] rounded-[11px] shadow-bs3 w-[59%]">
                                  <div className="flex flex-row gap-[11px] items-center justify-between w-[83%]">
                                    <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[33px] items-center justify-start rounded-[16px] shadow-bs4 w-[33px]">
                                      <Img
                                        className="h-[33px] md:h-auto rounded-[50%] w-[33px]"
                                        src="images/img_image51.png"
                                        alt="imageFiftyOne"
                                      />
                                    </div>
                                    <Img
                                      className="h-[22px]"
                                      src="images/img_group7.svg"
                                      alt="groupSeven_One"
                                    />
                                  </div>
                                  <Img
                                    className="h-[9px]"
                                    src="images/img_group5.svg"
                                    alt="groupFive_Two"
                                  />
                                </div>
                              </div>
                              <Button
                                className="flex h-[60px] items-center justify-center mr-[350px] rounded-[12px] w-[60px]"
                                color="teal_A400"
                                size="xs"
                                variant="fill"
                              >
                                <Img
                                  className="h-[33px]"
                                  src="images/img_send1.svg"
                                  alt="sendOne"
                                />
                              </Button>
                            </div>
                          </div>
                          <div className="flex sm:flex-col flex-row sm:gap-10 gap-[253px] items-end justify-end md:ml-[0] ml-[170px] w-[82%] md:w-full">
                            <Img
                              className="h-[78px] md:h-auto object-cover"
                              src="images/img_vector6.png"
                              alt="vectorSix"
                            />
                            <div className="bg-white-A700 flex flex-row gap-[29px] items-center justify-between mb-1 sm:mt-0 mt-[18px] p-[11px] rounded-[11px] shadow-bs3 w-[29%] sm:w-full">
                              <div className="flex flex-row gap-[11px] items-center justify-between w-[83%]">
                                <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[33px] items-center justify-start rounded-[16px] shadow-bs4 w-[33px]">
                                  <Img
                                    className="h-[33px] md:h-auto rounded-[50%] w-[33px]"
                                    src="images/img_satisfiedhappy.png"
                                    alt="satisfiedhappy"
                                  />
                                </div>
                                <Img
                                  className="h-[22px]"
                                  src="images/img_group7.svg"
                                  alt="groupSeven_Two"
                                />
                              </div>
                              <Img
                                className="h-[9px]"
                                src="images/img_group5.svg"
                                alt="groupFive_Three"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-teal-A400_01 h-2.5 mb-[180px] ml-[164px] mt-[-NaNpx] rotate-[180deg] rounded-[50%] w-2.5 z-[1]"></div>
                      <Img
                        className="h-[171px] ml-auto mr-[379px] mt-[-65.64px] object-cover z-[1]"
                        src="images/img_vector7.png"
                        alt="vectorSeven"
                      />
                    </div>
                    <div className="bg-teal-A400_01 h-2.5 ml-auto mr-[374px] mt-[-5px] rotate-[180deg] rounded-[50%] w-2.5 z-[1]"></div>
                    <div className="bg-teal-A400_01 h-2.5 mb-[139px] ml-auto mr-[214px] mt-[-NaNpx] rotate-[180deg] rounded-[50%] w-2.5 z-[1]"></div>
                  </div>
                  <Img
                    className="absolute bottom-[34%] h-[68px] object-cover right-[28%]"
                    src="images/img_vector8.png"
                    alt="vectorEight"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-white-A700 flex flex-row gap-[29px] items-center justify-start left-[27%] p-[11px] rounded-[11px] shadow-bs3 top-[32%] w-[15%]">
              <div className="flex flex-row gap-[11px] items-center justify-between w-[83%]">
                <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[33px] items-center justify-start rounded-[16px] shadow-bs4 w-[33px]">
                  <Img
                    className="h-[33px] md:h-auto rounded-[50%] w-[33px]"
                    src="images/img_image52.png"
                    alt="imageFiftyTwo"
                  />
                </div>
                <Img
                  className="h-[22px]"
                  src="images/img_group7.svg"
                  alt="groupSeven_Three"
                />
              </div>
              <Img
                className="h-[9px]"
                src="images/img_group5.svg"
                alt="groupFive_Four"
              />
            </div>
            <div className="absolute bg-white-A700 bottom-[12%] flex flex-row gap-[29px] items-center justify-start p-[11px] right-[36%] rounded-[11px] shadow-bs3 w-[15%]">
              <div className="flex flex-row gap-[11px] items-center justify-between w-[83%]">
                <div className="bg-white-A700 border border-solid border-white-A700 flex flex-col h-[33px] items-center justify-start rounded-[16px] shadow-bs4 w-[33px]">
                  <Img
                    className="h-[33px] md:h-auto rounded-[50%] w-[33px]"
                    src="images/img_image52.png"
                    alt="imageFiftyTwo_One"
                  />
                </div>
                <Img
                  className="h-[22px]"
                  src="images/img_group7.svg"
                  alt="groupSeven_Four"
                />
              </div>
              <Img
                className="h-[9px]"
                src="images/img_group5.svg"
                alt="groupFive_Five"
              />
            </div>
            <Img
              className="absolute bottom-[3%] h-[51px] right-[18%]"
              src="images/img_checkmark.svg"
              alt="checkmark"
            />
          </div>
        </div>
        <div className="md:h-[370px] h-[420px] max-w-[1218px] mt-5 mx-auto md:px-5 relative w-full">
          <div className="absolute bg-light_blue-50 md:h-[350px] h-[370px] inset-x-[0] mx-auto pl-5 pt-5 rounded-[16px] top-[0] w-[97%] md:w-full">
            <Img
              className="absolute bottom-[0] h-[350px] object-cover right-[0]"
              src="images/img_group_350x510.png"
              alt="group_One"
            />
            <div className="absolute flex flex-col gap-[23px] items-start justify-start left-[5%] top-[15%] w-[58%]">
              <div className="h-[55px] relative w-[90%] md:w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                  <Text
                    className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                    size="txtRudaBold45"
                  >
                    Follow for more information
                  </Text>
                </div>
                <Img
                  className="absolute h-[18px] left-[38%] top-[0]"
                  src="images/img_signal.svg"
                  alt="signal_Three"
                />
              </div>
              <Text
                className="leading-[28.00px] text-base text-blue_gray-300 w-full"
                size="txtRudaRegular16Bluegray300"
              >
                Businesses generally promote their brand, products, and services
                by identifying audience. No wonder that promotion strategy is
                one of the most important processes in marketing.
              </Text>
            </div>
            <div className="absolute bottom-[16%] flex flex-col items-center justify-start left-[5%] w-[52%]">
              <div className="bg-white-A700 flex flex-row sm:gap-10 items-center justify-between p-[9px] rounded-md w-full">
                <Text
                  className="ml-[11px] text-base text-blue_gray-300"
                  size="txtRudaRegular16Bluegray300"
                >
                  Enter email address
                </Text>
                <Button
                  className="cursor-pointer font-medium min-w-[150px] text-center text-sm"
                  shape="round"
                  color="gray_900"
                  size="lg"
                  variant="fill"
                >
                  Follow
                </Button>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-[62px] right-[0]"
            src="images/img_reply_black_900.svg"
            alt="reply"
          />
        </div>
        <footer className="bg-gray-900_01 flex items-center justify-center mt-[59px] md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-center mt-[39px] w-full">
            <div className="sm:h-[207px] h-[248px] md:h-[820px] relative w-4/5 md:w-full">
              <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto w-full">
                <div className="flex md:flex-1 flex-col gap-[53px] items-start justify-end mb-1 sm:pr-5 pr-[25px] py-[25px] w-[31%] md:w-full">
                  <Text
                    className="mt-[49px] text-base text-blue_gray-300"
                    size="txtRudaRegular16Bluegray300"
                  >
                    Content to be put here
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-[45%] md:w-full">
                    <Img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_facebook.png"
                      alt="facebook"
                    />
                    <Img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_instagram.png"
                      alt="instagram"
                    />
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_twitter.svg"
                      alt="twitter"
                    />
                    <Img
                      className="h-[30px] md:h-auto object-cover w-[30px]"
                      src="images/img_linkedin.png"
                      alt="linkedin"
                    />
                  </div>
                </div>
                <ul className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[9%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:" className="text-lg text-white-A700">
                      <Text size="txtRudaMedium18">Quick Links</Text>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <Button className="bg-transparent cursor-pointer leading-[normal] mt-[21px] text-base text-blue_gray-300 text-center">
                        Home
                      </Button>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[13px] text-base text-blue_gray-300"
                    >
                      <Text size="txtRudaRegular16Bluegray300">About</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[15px] text-base text-blue_gray-300"
                    >
                      <Text size="txtRudaRegular16Bluegray300">
                        Appointment
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-3.5 text-base text-blue_gray-300"
                    >
                      <Text size="txtRudaRegular16Bluegray300">Blog</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="mt-[13px] text-base text-blue_gray-300"
                    >
                      <Text size="txtRudaRegular16Bluegray300">Contact</Text>
                    </a>
                  </li>
                </ul>
                <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start md:mt-0 mt-[5px] pr-[3px] pt-[3px] w-[8%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtRudaMedium18"
                  >
                    Company
                  </Text>
                  <ul className="flex flex-col gap-3.5 items-start justify-start md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">About</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">Contact</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">Careers</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">Press</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start md:mt-0 mt-[5px] w-[13%] md:w-full">
                  <Text
                    className="text-lg text-white-A700"
                    size="txtRudaMedium18"
                  >
                    Information
                  </Text>
                  <ul className="flex flex-col items-start justify-start md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-3 text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">
                          Terms & Condition
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="mt-[15px] text-base text-blue_gray-300"
                      >
                        <Text size="txtRudaRegular16Bluegray300">FAQ</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <Text
                className="absolute leading-[50.00px] left-[0] sm:text-[40px] md:text-[46px] text-[50px] text-teal-A400 top-[0]"
                size="txtRudaBold50TealA400"
              >
                <>
                  SHIKSHA <br />
                  SAMBHAV
                </>
              </Text>
            </div>
            <div className="bg-black-900_06 flex flex-row font-opensans md:gap-10 items-start justify-between p-[27px] sm:px-5 w-full">
              <Text
                className="ml-[108px] mt-[3px] text-base text-white-A700"
                size="txtOpenSansRegular16"
              >
                Copyright © 2021 SS
              </Text>
              <Text
                className="mr-[108px] mt-[3px] text-base text-right text-white-A700"
                size="txtOpenSansRegular16"
              >
                All Rights Reserved
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home1Page;
