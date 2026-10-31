interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status?: "accepted";
  bestPaperAward?: boolean;
  href: string;
  arxivId?: string;
  pdfHref?: string;
  thumbnail?: { src: string; alt: string };
  coverLabel?: string;
}

// Keep the selected papers in the author's requested order.
export const publications: Publication[] = [
  {
    title: "Low-complexity precoding for extremely large-scale MIMO over non-stationary channels",
    authors: ["Bokai Xu", "Zhe Wang", "Huahua Xiao", "Jiayi Zhang", "Bo Ai", "Derrick Wing Kwan Ng"],
    venue: "IEEE International Conference on Communications (ICC)",
    year: 2023,
    bestPaperAward: true,
    href: "https://ieeexplore.ieee.org/document/10279327/",
    arxivId: "2302.00847",
    // Figure 2, page 5 of the arXiv paper.
    thumbnail: {
      src: "/images/publications/low-complexity.webp",
      alt: "Spectral efficiency comparison of XL-MIMO precoding algorithms",
    },
  },
  {
    title: "Multi-Agent Reinforcement Learning for Movable Antenna-aided Cell-Free Massive MIMO Systems",
    authors: ["Bokai Xu", "Jiayi Zhang", "Shuaifei Chen", "Ziheng Liu", "Huahua Xiao", "Derrick Wing Kwan Ng", "Bo Ai"],
    venue: "IEEE Journal on Selected Areas in Communications (JSAC)",
    year: 2026,
    href: "https://arxiv.org/abs/2610.08387",
    arxivId: "2610.08387",
    // Figure 1, page 3 of the arXiv paper.
    thumbnail: {
      src: "/images/publications/movable-antenna.webp",
      alt: "Movable antenna system and heterogeneous multi-agent architecture",
    },
  },
  {
    title: "MaLAM4Com: Multi-agent cooperative large AI models for wireless communications",
    authors: ["Ziheng Liu", "Jiayi Zhang", "Yiyang Zhu", "Enyu Shi", "Bokai Xu", "Dusit Niyato", "Shi Jin", "Bo Ai"],
    venue: "IEEE Journal on Selected Areas in Communications (JSAC)",
    year: 2026,
    href: "https://ieeexplore.ieee.org/document/11303197/",
    thumbnail: {
      src: "/images/publications/malam4com.png",
      alt: "MaLAM4Com framework: data preprocessing, multi-agent cooperative training, and downstream inference",
    },
  },
  {
    title: "Scaling law for large wireless models",
    authors: ["Ziheng Liu", "Jiayi Zhang", "Haoyu Wang", "Bokai Xu", "Chen Zhang", "Yiyang Zhu", "Enyu Shi"],
    venue: "AAAI Conference on Artificial Intelligence (AAAI)",
    year: 2026,
    href: "https://ojs.aaai.org/index.php/AAAI/article/view/39579",
    pdfHref: "https://ojs.aaai.org/index.php/AAAI/article/view/39579/43540",
    // Figure 1, page 1 of the AAAI paper.
    thumbnail: {
      src: "/images/publications/scaling-law.webp",
      alt: "Prediction accuracy of wireless scaling laws in rural and urban scenarios",
    },
  },
  {
    title: "HintKD: Hint Knowledge Distillation for Bandwidth-Constrained Cloud-Edge Inference",
    authors: ["Wanling Luo", "Jiayi Zhang", "Bokai Xu", "Ziheng Liu"],
    venue: "IEEE Global Communications Conference (GLOBECOM)",
    year: 2026,
    status: "accepted",
    href: "https://arxiv.org/abs/2610.08412",
    arxivId: "2610.08412",
    // Figure 1, page 2 of the arXiv paper.
    thumbnail: {
      src: "/images/publications/hintkd.webp",
      alt: "HintKD cloud-edge knowledge distillation framework",
    },
  },
  {
    title: "Multi-agent reinforcement learning in wireless distributed networks for 6G",
    authors: ["Jiayi Zhang", "Ziheng Liu", "Yiyang Zhu", "Enyu Shi", "Bokai Xu", "Chau Yuen", "Dusit Niyato", "M\u00e9rouane Debbah", "Shi Jin", "Bo Ai", "Xuemin (Sherman) Shen"],
    venue: "arXiv preprint",
    year: 2025,
    href: "https://arxiv.org/abs/2502.05812",
    arxivId: "2502.05812",
    // Figure 3 from https://arxiv.org/html/2502.05812v1.
    thumbnail: {
      src: "/images/publications/marl-6g.png",
      alt: "Connections between multi-agent learning and wireless distributed networks",
    },
  },
  {
    title: "White-box AI model: Next frontier of wireless communications",
    authors: ["Jiayao Yang", "Jiayi Zhang", "Bokai Xu", "Jiakang Zheng", "Zhilong Liu", "Ziheng Liu", "Dusit Niyato", "M\u00e9rouane Debbah", "Zhu Han", "Bo Ai"],
    venue: "IEEE Network",
    year: 2025,
    href: "https://arxiv.org/abs/2504.09138",
    arxivId: "2504.09138",
    // Model diagrams from Figure 3, page 4 of the arXiv paper.
    thumbnail: {
      src: "/images/publications/white-box.webp",
      alt: "Comparison of black-box neural networks and the white-box ReduNet model",
    },
  },
];
