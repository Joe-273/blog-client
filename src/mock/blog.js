import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/blogtype", "get", {
  code: 0,
  msg: "",
  "data|10-30": [
    {
      "id|+1": 0,
      name: "分类@id",
      "blogCount|0-300": 0,
      "order|+1": 1,
    },
  ],
});

Mock.mock(/^\/api\/blog(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);
  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      "total|2000-3000": 0,
      [`rows|${query.limit}`]: [
        {
          id: "@guid",
          title: "@ctitle(5,12)",
          description: "@cparagraph(1,12)",
          category: {
            "id|1-20": 0,
            name: "分类@id",
          },
          "scanNumber|0-5000": 0,
          "commentNumber|0-500": 0,
          "thumb|1": ["https://picsum.photos/id/@natural(500, 1000)/300/200", null],
          createDate: "@natural(1609459200000, " + Date.now() + ")",
        },
      ],
    },
  });
});
