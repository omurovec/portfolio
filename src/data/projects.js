import { dsc, increment, daohaus, minty, kernel } from '../assets/projects';

const projects = [
  {
    title: 'KERNEL',
    desc: 'Joined the Gitcoin Kernel accelerator as a member of the Increment team to learn more from experienced members in the blockchain community.',
    links: ['https://kernel.community/en/'],
    logo: kernel,
  },
  {
    title: 'Google DSC',
    desc: 'Leading Workshops and talks as Technical Officer for the Google Developer Student Club at UBCO.',
    logo: dsc,
  },
  {
    title: 'Increment (HackMoney Finalist)',
    desc: 'Lead Front-end Developer. Built proof-of-concept at Hackmoney 2021 and continued development for mainnet launch.',
    links: ['https://increment.finance'],
    repo: 'https://github.com/Increment-Finance/increment-app',
    logo: increment,
  },
  {
    title: 'Minty',
    desc: 'Built landing pages and interfaces that allow enthusiasts to collect, manage and sell real-world collectibles as a DAO.',
    links: ['https://minty.app'],
    logo: minty,
  },
  {
    title: 'DaoHaus Rarible Boost',
    desc: 'Worked closely with the DAOHaus team to build the interfaces to allow DAOs to buy/sell/send NFTs on the Rarible platform.',
    links: ['https://app.daohaus.club/'],
    repo: 'https://github.com/HausDAO/pokemol-web',
    logo: daohaus,
  },
];

export default projects;
