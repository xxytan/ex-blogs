// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Xytan's Website",
		imgurl: "https://xytan.mysxl.cn/favicon.ico",
		desc: "站长小学时候的旧站",
		siteurl: "https://xytan.mysxl.cn",
		tags: ["回忆"],
	},
	{
		id: 2,
		title: "二叉树树",
		imgurl: "https://q2.qlogo.cn/headimg_dl?dst_uin=2726730791&spec=0",
		desc: "Protect What You Love.",
		siteurl: "https://2x.nz",
		tags: ["朋友"],
	},
	{
		id: 3,
		title: "寒士杰克",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2959602696&s=640",
		desc: "喜欢捣鼓，不断进步！",
		siteurl: "https://www.hansjack.com",
		tags: ["朋友"],
	},
	{
		id: 4,
		title: "江鸟博客",
		imgurl: "https://blog.azucat.eu/favicon/icon.png",
		desc: "天有不公~地有苍生~万般万般年月过~落日朱门满地红~",
		siteurl: "https://blog.azucat.eu",
		tags: ["朋友"],
	},
	{
		id: 5,
		title: "1zyq1 BLOG",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=2289308183&s=640",
		desc: "爱你所爱",
		siteurl: "https://www.1zyq1.com",
		tags: ["朋友"],
	},
	{
		id: 6,
		title: "吃猫的鱼の总部",
		imgurl: "https://geekrain.site/_next/image?url=https%3A%2F%2Ffree.picui.cn%2Ffree%2F2026%2F01%2F25%2F69760dea9ac4f.png&w=640&q=75",
		desc: "长官在这里发号施令",
		siteurl: "https://geekrain.site",
		tags: ["朋友"],
	},
	{
		id: 7,
		title: "一刻",
		imgurl: "https://blog.xanz.xyz/icon/android-chrome-192x192.png",
		desc: "沉浮与世，驻足一刻",
		siteurl: "https://blog.xanz.xyz",
		tags: ["朋友"],
	},
	{
		id: 8,
		title: "Ksable’s 小屋",
		imgurl: "https://weavatar.com/avatar/abd826c253cc22fb954ec7567526f9a1211deb9905b8477c5b2875e20a2adb0b?s=500",
		desc: "身在无间，心在桃源",
		siteurl: "https://blog.ksable.top",
		tags: ["朋友"],
	},
	{
		id: 9,
		title: "兔兔博客",
		imgurl: "https://blog.xn--eet944d.top/assets/avatar.webp",
		desc: "万事都要全力以赴，包括开心",
		siteurl: "https://blog.xn--eet944d.top",
		tags: ["朋友"],
	},
	{
	    id: 10,
	    title: "可达鸭战神の博客",
        imgurl: "https://blog.kdyzs.top/img/butterfly-icon.png",
        desc: "Good morning. And in case I don't see ya, good afternoon good evening and good night.",
        siteurl: "https://blog.kdyzs.top",
        tags: ["朋友"]
    }
];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
