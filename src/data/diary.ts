// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"各位新年快乐🎉",
		date: "2026-01-01T00:00:00Z"
	},
	{
	    id: 2,
	    content:
	        "新年第一杯奶茶🧋",
	    date: "2026-01-01T15:00:00Z",
	    images: ["https://roc.us.ci/file/blog/leaves/1.png"]
	},
	{
	    id: 3,
	    content:
	        "解锁新域名：oxue.de🎉",
	    date: "2026-01-02T01:32:00Z"
	},
	{
	    id: 4,
	    content:
	        "我就这样炫耀我的成绩🥴",
	    date: "2026-01-03T12:46:00",
	    images: ["https://img.oxue.de/file/blog/leaves/2.jpg"]
    },
    {
        id: 5,
        content:
            "巅峰😎",
        date: "2026-01-09T17:33:00Z",
        images: ["https://img.oxue.de/file/za/record.png"]
    },
    {
        id: 6,
        content:
            "怎么这么快假期就过去 5 天了😭",
        date: "2026-01-26T00:03:42Z"
    }
];

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		);
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
