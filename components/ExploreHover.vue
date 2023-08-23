<template>
       <li class="my-4 lg:my-0 lg:pr-2 tracking-wide explore">
                            <a class="text-white " href="#" data-te-nav-link-ref>
                                <button type="button"
                                    class="bg-blue-700 px-3 text-white rounded flex py-2.5 mx-2 text-sm font-extrabold hover:bg-white hover:text-blue-700 cursor-auto hover:border-2 border-black absolute z-[1000] focus-within:hover:bg-black ">Explore


                                    <svg class=" ml-1 mt-1 hover:fill-blue-500 fill-current " viewBox="0 0 32 32" width="9"
                                        height="9">
                                        <path
                                            d="M30.054 14.429l-13.25 13.232q-0.339 0.339-0.804 0.339t-0.804-0.339l-13.25-13.232q-0.339-0.339-0.339-0.813t0.339-0.813l2.964-2.946q0.339-0.339 0.804-0.339t0.804 0.339l9.482 9.482 9.482-9.482q0.339-0.339 0.804-0.339t0.804 0.339l2.964 2.946q0.339 0.339 0.339 0.813t-0.339 0.813z">
                                        </path>
                                    </svg>
                                </button>

                            </a>

                            <div
                                class="hidden fixed mt-[60px] text-black p-5 mx-w-full w-[100vw] h-[100vh] exploremenu shadow-xl mx-auto z-[3000]  bg-[rgba(0,0,0,0.6)] left-0 aria-hidden:true  xl-[1480px]:mt-[60px] ">


                                <div class="absolute w-[350px] left-[30px] top-[-20px]">

                                    <div
                                        class="relative mt-[20px] z-[3000] bg-[#FFFFFF] shadow-none border-2 border-[#CCCCCC] flex">
                                        <ul class="text-[rgb(31, 31, 31)] w-[348px] pt-9 exploremenuLinks  ">




                                            <h2 class="mb-6 px-9 text-lg pl-[30px]"><strong>Goals</strong></h2>
                                            <li class="mb-2 hover:shadow-lg  pl-[40px] ">Take a free course</li>

                                            <li class="mb-2 hover:shadow-lg pl-[40px]">Earn a degree</li>

                                            <svg class="flex transition-[all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms] h-[20px] w-[20px] right-[20px] fill-current text-[rgb(42,115,204)] align-middle top-[145px]  absolute exploreMenuLinksIcon"
                                                viewBox="0 0 48 48">

                                                <polygon
                                                    transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)"
                                                    points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8"
                                                    role="presentation"></polygon>

                                            </svg>


                                            <li class="mb-2 hover:shadow-lg pl-[40px]">Earn a certificate</li>
                                            <svg class="flex transition-[all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms] h-[20px] w-[20px] right-[20px] fill-current text-[rgb(42,115,204)] align-middle top-[180px]  absolute exploreMenuLinksIcon"
                                                viewBox="0 0 48 48">

                                                <polygon
                                                    transform="translate(23.999500, 24.000000) scale(-1, 1) translate(-23.999500, -24.000000)"
                                                    points="16 24 30.585 40 31.999 38.586 18.828 24 31.999 9.415 30.585 8"
                                                    role="presentation"></polygon>

                                            </svg>


                                            <li class="mb-2 hover:shadow-lg pl-[40px]">Find your new career</li>



                                            <h2 class="mb-6 px-9 text-lg pl-[30px] pt-8 "><strong>Subjects </strong></h2>
                                            <Icons />

                                            <div class="flex w-[348px] hover:shadow-lg dataScience relative">
                                                <li class="pl-[40px]  h-[40px]">Data Science
                                                </li>
                                                <Icons />


                                                <Hover :title1="'Degrees'" :title2="'Certificate Programs'"
                                                    :title3="'Get Started'"
                                                    :title1para="'Breakthrough pricing on 100% online degrees designed to fit into your life.'"
                                                    :title2para="'In 3-9 months, gain the skills to break into career or take your career to the next level.'"
                                                    :title1Birla="'Birla Institute of Technology & Science, Pilani'"
                                                    :title1BirlaPara="'Bachelor of Science in Compter Science'"
                                                    :title1Michigan="'University of Michigan'"
                                                    :title1MichiganPara="'Master of Applied Data Science'"
                                                    :title1Illinos="'Illinios Tech'"
                                                    :title1IllinosPara="'Master of Data Science'"
                                                    :title1Colorado="'University of Colorado Boulder'"
                                                    :title1ColoradoPara="'Master of Science in Data Science'"
                                                    :title1Champaign="'University of Illinios at Urbana Champaign'"
                                                    :title1ChampaignPara="'Master of Computer Science in Data Science'"
                                                    :title1Arizona="'Arizona State University'"
                                                    :title1ArizonaPara="'Master of Computer Science'"
                                                    :title1Button="'View all degrees'"
                                                    :title1img1="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/b9/c608c79b5c498a8fa55b117fc3282f/5.-Square-logo-for-landing-page---Alpha.png?auto=format%2Ccompress&amp;dpr=3&amp;w=36&amp;h=36'"
                                                    :title1img2="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title1img3="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/3d/1c8fdf7ef5404aa83ab0c00fa12cf5/LOGO_1.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title1img4="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title1img5="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title1img6="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/be/bf4290646811e5b6de89a29eb8ebc3/ASUlogo.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title2img1="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/bb/f5ced2bdd4437aa79f00eb1bf7fbf0/IBM-Logo-Blk---Square.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title2img2="'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/4a/cb36835ae3421187080898a7ecc11d/Google-G_360x360.png?auto=format%2Ccompress&amp;dpr=1&amp;w=36&amp;h=36'"
                                                    :title2IBM1="'IBM Data Science'" :title1IBMpara="'No Prerequisties'"
                                                    :title1IBMlist="'Self Paced'" :title2IBM2="'IBM Data Analyst'"
                                                    :title2Google1="'Google Data Analytics'"
                                                    :title2Google2="'Google Advanced Data Analytics'"
                                                    :title2Google3="'Google Business Intelligence'"
                                                    :title31="'Launch your Career'" :title32="'Free Courses'"
                                                    :title33="'Most Popular'" :title34="'New Courses'"
                                                    :title35="'Guided Project under 2 hours'" :title36="'Popular Skills'"
                                                    :title37="'Python'" :title38="'SQL'" :title39="'Microsoft Excel'"
                                                    :title310="'Excel'" :title311="'Machine Learning'"
                                                    :title312="'Data Sceince'" :title313="'Data Analytics'"
                                                    :title314="'Power BI'" :title315="'Artificial Intelligence'"
                                                    :title316="'Statistics'" />

                                            </div>


                                            <div class="flex w-[348px] hover:shadow-lg  dataScience relative">
                                                <li class="pl-[40px]  h-[40px]">Business
                                                </li>
                                                <Icons />

                                                <div class="ml-[30px]">
                                                    <!-- <Hover :title1="'Degrees'" :title2="'Certificate Programs'" :title3="'Get Started'" :title1para="'Breakthrough pricing on 100% online degrees designed to fit into your life.'" :title2para="'In 3-9 months, gain the skills to break into career or take your career to the next level.'" /> -->
                                                </div>
                                            </div>

    <div class="flex w-[348px] hover:shadow-lg dataScience relative">
    <li class="pl-[40px]  h-[40px]">Information Technology
    </li>
    <Icons />

    <div class="ml-[-75px]">
    <!-- <Hover :title="'Information'" /> -->
    </div>
    </div>

                                            <div class="flex w-[348px] hover:shadow-lg dataScience relative">
                                                <li class="pl-[40px]  h-[40px]">Language Learning
                                                </li>
                                                <Icons />

                                                <div class="ml-[-43px]">
                                                    <!-- <Hover/> -->
                                                </div>
                                            </div>

                                            <div class="flex w-[348px] hover:shadow-lg dataScience relative">
                                                <li class="pl-[40px]  h-[40px]">Personal Development
                                                </li>
                                                <Icons />

                                                <div class="ml-[-64px]">
                                                    <!-- <Hover/> -->
                                                </div>
                                            </div>

                                            <div class="flex w-[348px] hover:shadow-lg dataScience relative">
                                                <li class="pl-[40px]  h-[40px]">Physical Science and Enginering
                                                </li>
                                                <Icons />

                                                <div class="ml-[-134px]">
                                                    <!-- <Hover /> -->

                                                </div>
                                            </div>

                                           

                                   


                                            <button type="button"
                                                class=" mx-9
text-blue-900 mt-6 border-2 border-blue-700 bg-white focus:outline-none hover:bg-blue-700 focus:ring-4  rounded-lg text-[16px] font-extrabold hover:text-white px-2 py-1.5 mr-2"
                                                @click="handleAllCourse()"><strong>Browse
                                                    all subjects</strong>
                                                </button>



                                                   <button type="button"
                                                    class=" mx-9 mt-4
text-blue-900 mt-2 border-2 border-blue-700 bg-white focus:outline-none hover:bg-blue-700 focus:ring-4  rounded-lg text-[16px] font-extrabold hover:text-white px-6 py-1.5 mr-2 mb-[110px] "
                                                    @click="handleAllCourse()"><strong>Paid Courses</strong>
                                                    </button>
                                        </ul>





                                        <div class=" hidden try px-[208px]">
                                            <h1>trying</h1>
                                        </div>






                                    </div>
                                </div>
                            </div>
                        </li>
</template>

<script setup>
const router = useRouter();
function handleAllCourse() {
    router.push('/BrowseAllCourse')
}
</script>

<style scoped>
@import '../assets/css/custom.css';
</style>

