// 添加一天：复制下面的一组 { ... } 到数组末尾，再改日期、场景、对话和笔记。
// 对话每行以 A: 或 B: 开头。每条笔记按 [英文例句, 中文说明] 填写。
const lessons = [
  {
    date: "2026-11-21",
    prompt: "给物业打电话报修。用英语描述空调漏水的问题，并约好维修时间。",
    roles: [
      "A: 租客。空调昨晚开始漏水。周三上午你有组会，下午 3 点后在家。",
      "B: 物业。问漏水从什么时候开始。周三上午有空档，下午还有一个 4 点的空档。",
    ],
    draft: [
      "A: Hi, my air conditioner is leaking. It start last night.",
      "B: Is it still leaking now? Can the repair person come Wednesday morning?",
      "A: Yes. I have a meeting in the morning. I can at home after three. Can change to afternoon?",
      "B: Yes, we have four o’clock. Is that okay?",
      "A: Yes, four is okay. Thank you.",
    ],
    revised: [
      "A: Hi, I’m calling about my air conditioner. It started leaking last night.",
      "B: Is it still leaking? Could someone come by on Wednesday morning?",
      "A: Yes, it is. I have a meeting that morning, but I’ll be home after three. Could we do Wednesday afternoon instead?",
      "B: Sure. We have a slot at four. Does that work for you?",
      "A: Four works for me. Thanks!",
    ],
    notes: [
      ["It started leaking last night.","用过去式交代开始时间。"],
      ["Could we do Wednesday afternoon instead?","用来提出另一个时间。"],
    ],
  },
  {
    date: "2026-11-22",
    prompt: "物业来电，周三下午 4 点的维修要改期。用英语重新约时间。",
    roles: [
      "A: 租客。周四上午你有实验，下午 5 点后可以。问清楚师傅大概几点到。",
      "B: 物业。原来的时间取消了。周四上午 10 点或下午 5 点半可以上门。",
    ],
    draft: [
      "B: Hi, we need change your repair time. Can you do Thursday at ten?",
      "A: I have experiment in the morning. I can after five.",
      "B: We can come at five thirty. Is okay?",
      "A: Yes. What time he will arrive?",
      "B: Around five thirty. We call you before.",
    ],
    revised: [
      "B: Hi, we need to reschedule your repair. Does Thursday at ten work for you?",
      "A: I have an experiment that morning, but I’ll be home after five. Could we do Thursday evening instead?",
      "B: Sure. We have a slot at five thirty. Does that work for you?",
      "A: That works. What time should I expect the repair person?",
      "B: Around five thirty. We’ll call before we arrive.",
    ],
    notes: [
      ["We need to reschedule your repair.","用 reschedule 表示改期。"],
      ["What time should I expect the repair person?","用来问维修师傅大概几点到。"],
    ],
  },
];
