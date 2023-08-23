export default defineEventHandler((event) => {
    return {
       sliderData:[
        { 
            deg:{
              earnDegree: "Earn a degree",
              degree: "Degree"
              } 
         },
     { 
              details:[
             {
                id: 1,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mads-umich/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&amp;dpr=1&amp;w=25&amp;h=25&amp;q=40",
                logoTitle: 'University of Michigan',
                heading: 'Master of Applied Data Science'
            
              },
              {
                id: 2,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/ms-management-illinois/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/d8/42cdc0ab2011e8b910bdf80bed9f6c/CenterILblock-ISQUAREOrangeBackgrnd.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40",
                logoTitle: 'University of Illinois at Urbana-Champaign',
                heading: 'Master of Science in Management (iMSM)'
              },
            
              {
                id: 3,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/me-engineering-management-boulder/7f1ba63f-ce16-4c29-9690-557ac3eb3168.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a6/7035b7e00b401383be4e5856b8bdaa/Boulder-FL-VERT-B---cropped.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40",
                logoTitle: 'University of Colorado Boulder',
                heading: 'Master of Engineering in Engineering Management'
              },
            
              {
                id: 4,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mcit-penn/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&fit=crop&q=50",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/a2/66aaaad14d426fa9798ed714b3d0e5/UniversityofPennsylvania_Vertical_RGB_coursera-cert.png?auto=format%2Ccompress&dpr=2&w=25&h=25&q=40",
                logoTitle: 'University of Pennsylvania',
                heading: 'Master of Computer and Information Technology'
              },
            
              {
                id: 5,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/degree-assets/unt-online-bachelor-completion/banner.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/1a/6984a02c5a45e0bc8c40b02a42bbdb/UNT-logo1.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
                logoTitle: 'University of North Texas',
                heading: 'Bachelor of Applied Arts and Sciences'
              },
              {
                id: 6,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/degree-landing-pages/masters-innovation-entrepreneurship/hecsearch.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/3a/4462907b1511e8a3472b753a4c35c3/HEC_logo.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
                logoTitle: 'HEC Paris',
                heading: 'Executive MSc & MSc in Innovation and ...'
              },
              {
                id: 7,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/msm-digital-transformation-healthcare-northeastern/a988cb18-82fc-4f29-87b9-315af6df02c0.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/http://coursera-university-assets.s3.amazonaws.com/6a/123cbd870d4619aab9613bb25578da/Red-N-on-white-background.png?auto=format%2Ccompress&dpr=1&w=25&h=25&q=40",
                logoTitle: 'Northeastern University ',
                heading: 'MS in Management: Healthcare'
              },
              {
                id: 8,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/ms-software-engineering-wvu/a338480c-2918-4f61-b3dc-56b92506ca67.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/ms-software-engineering-wvu/a338480c-2918-4f61-b3dc-56b92506ca67.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logoTitle: 'West Virginia University',
                heading: 'Master of Science in Software Engineering'
              },
              {
                id: 9,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/illinois/iMBA+square.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mads-umich/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logoTitle: 'University of Illinois at Urbana-Champaign',
                heading: 'Master of Business Administration (iMBA)'
              },
              {
                id: 10,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/imsa/imsa-thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mads-umich/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logoTitle: 'University of Illinois at Urbana-Champaign',
                heading: 'Master of Science in Accountancy (iMSA)'
              },
              {
                id: 11,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/ms-software-engineering-wvu/a338480c-2918-4f61-b3dc-56b92506ca67.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mads-umich/thumbnail.jpg?auto=format%2Ccompress%2C%20enhance&dpr=2&w=265&h=204&fit=crop&q=50",
                logoTitle: 'University of Illinois at Urbana-Champaign',
                heading: 'Master of Computer Science in Data Science'
              },
              {
                id: 12,
                img: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera_assets/ddp/branding/mba-illinois-tech/14f38073-19e7-4f79-888d-7a9fd77b2398.jpg?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=204&q=50&fit=crop",
                logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/70/de505d47be7d3a063b51b6f856a6e2/New-Block-M-Stacked-Blue-295C_600x600.png?auto=format%2Ccompress&amp;dpr=1&amp;w=25&amp;h=25&amp;q=40",
                logoTitle: 'University of Michigan',
                heading: 'Master of Applied Data Science'
              },
            ]
        }
        ]
    }
    
  })