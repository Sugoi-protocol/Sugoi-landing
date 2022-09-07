export interface Testimonial {
  title: string;
  logo: string;
  description: string;
  persona: string;
  url: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    title: "What is Sugoi?",
    logo: process.env.PUBLIC_URL + "",
    persona: "",
    description: `Sugoi is web3’s first “green savings protocol” where users can deposit their stablecoins,
     earn interest, and be able to redirect a percentage of that interest towards Environmental NGOs.
     Users are incentivized by social impact, tax deductions and special rewards like NFTs.`,
    url: "",
  },
  {
    title: "How does Sugoi Work?",
    logo: process.env.PUBLIC_URL + "",
    persona: "",
    description: `Sugoi is a fully decentralized protocol that generates yield on users' deposits by depositing into decentralized lending protocols i.e.
     Aave and then automatically donating the yield while giving users access to their initial investment (principal) anytime.
      We will plant a tree for every user that makes a deposit to Sugoi. 
      We will also gamify where we plant each tree by creating a lottery among the countries with the most activity every 3 months.`,
    url: "",
  },
  
  {
    title: "Which Impact initiatives will we invest in?",
    logo: process.env.PUBLIC_URL + "/logos/Thegivingblock.svg",
    persona: "",
    description: `We will donate funds to:`,
    url: "https://thegivingblock.com",
  },

  
  {
    title: "Can i get tax write off?",
    logo: process.env.PUBLIC_URL + "",
    persona: "",
    description: `For your donations to environmental NGO’s you can get a tax receipt upon requesting from web app.`,
    url: "",
   },

   {
    title: "Can I lose my money? What are the risks?",
    logo: process.env.PUBLIC_URL + "",
     persona: "",
     description: `Assuming the protocol operates as intended, there is no risk of losing your money.
      We partner with trusted decentralized networks that have track record of keeping money safe and not being exploited.
      However, there are still many risks inherent in using a blockchain-based protocol like this.
      These risks include protocol dependency risk, smart contract exploit risk, wallet loss risk that could result in losing some or all of your money. `,
    url: "",
  },
];

export const launchPartners = [
  
];
