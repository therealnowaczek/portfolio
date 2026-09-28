/**
 * High-quality Stitch asset export via HTML render (not CDN thumbnails).
 * cover + screen-1..3 mapped to portfolio slugs.
 */
export type AssetPick = {
  file: "cover" | "screen-1" | "screen-2" | "screen-3";
  title: string;
  width: number;
  height: number;
  htmlUrl: string;
};

export const STITCH_ASSETS: Record<string, AssetPick[]> = {
  northline: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlMjBkYjZlODIwNDRmNjg3M2M2MzUyN2ViEgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTY0MTgwMjA1MjczNzQxMjQ5&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Profitability Overview",
      width: 2560,
      height: 2416,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlNWI3MWNmNTEwNWYxMWMwNDc4MzIxMTk1EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTY0MTgwMjA1MjczNzQxMjQ5&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Finding Detail",
      width: 2560,
      height: 2838,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlNDU3YjUyOTEwOTY4OWM1ZDE0MDUzNmM1EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTY0MTgwMjA1MjczNzQxMjQ5&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Autonomous Rules",
      width: 2560,
      height: 2888,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlNzcxZDYwNjMwOTY4OWM1ZDE0MDUzNmM1EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM4NTY0MTgwMjA1MjczNzQxMjQ5&filename=&opi=89354086",
    },
  ],
  harbor: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlMTY0MDdjODUwNGU3NGRiZjI0MTgyOTQyEgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjgwMzQyMjc1NDE0NDY0NjA0&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Harbor Home",
      width: 780,
      height: 2090,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhkZjc4OWIwMjAwNGU3NGRiOWIzMjJiMzU2EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjgwMzQyMjc1NDE0NDY0NjA0&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Repayment Flow",
      width: 780,
      height: 2290,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlNWQxZDQ1MjgwN2M0Y2FjY2FjMWYyODFlEgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjgwMzQyMjc1NDE0NDY0NjA0&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Payment Scheduled",
      width: 780,
      height: 1768,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlNWI0NmIwMzUwNGU3NGZjMGI0Mjc5NTkxEgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM0NjgwMzQyMjc1NDE0NDY0NjA0&filename=&opi=89354086",
    },
  ],
  circuit: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlMWZhNzFhMTUwOTY4OGNiODBlMzM1NmE1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTY5MDYzNjQwNDkyNDY1ODQzOQ&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Deployments List",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYWMxOGQ0ODgwOTY4OGNiODBlMzM1NmE1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTY5MDYzNjQwNDkyNDY1ODQzOQ&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Deploy Detail",
      width: 2560,
      height: 2528,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYWMzMGZlNzcwNDRmNTc4Y2MyMzU2NGM0EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTY5MDYzNjQwNDkyNDY1ODQzOQ&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Incident State",
      width: 2560,
      height: 2744,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYWM0YTIxMTQwMjNiZGI4ZDYxMzQzNTNiEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNTY5MDYzNjQwNDkyNDY1ODQzOQ&filename=&opi=89354086",
    },
  ],
  folio: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlMzU0YWU5NDAwNWYxMWMwNDc4MzIxMTk1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzE2OTY2MzAyNzM3MzIzNzc3Mg&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Feed",
      width: 780,
      height: 3362,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlNGM4YmZhNmMwOTY4OGZlNWQ4MjVmOWI3EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzE2OTY2MzAyNzM3MzIzNzc3Mg&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Project Detail",
      width: 780,
      height: 3890,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYWMwZjQxNzEwOTY4OGZlNWQ4MjVmOWI3EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzE2OTY2MzAyNzM3MzIzNzc3Mg&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Compose Critique",
      width: 780,
      height: 2598,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYWMyOTg2YzAwMjNiZGI4ZDYxMzQzNTNiEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzE2OTY2MzAyNzM3MzIzNzc3Mg&filename=&opi=89354086",
    },
  ],
  quorum: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlMjBlOTA5MzMwMzU2YzM3NGFlMzA2NDE1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDQ0OTM4Nzk5NTM2NjgyOTMyNQ&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Partners Directory",
      width: 2560,
      height: 3120,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlNmNjNDZjMzAwOTY4OGNiODBlMzM1NmE1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDQ0OTM4Nzk5NTM2NjgyOTMyNQ&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Roles Matrix",
      width: 2560,
      height: 2696,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYjk0YjU0MGIwNGU3NGRiZjI0MTgyOTQyEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDQ0OTM4Nzk5NTM2NjgyOTMyNQ&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Activation Checklist",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYjk3NDYwYzcwNGU3NGRiOWIzMjJiMzU2EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNDQ0OTM4Nzk5NTM2NjgyOTMyNQ&filename=&opi=89354086",
    },
  ],
  pulse: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlMzZkZjI2OGMwNjM5NzVhNzJhMDE5NGJiEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzc0Mjc2OTIxMzk3NDIyMzc2OA&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Today Recovery",
      width: 780,
      height: 2900,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYmIxMmM4ZTYwNGU3NGZjMGI0Mjc5NTkxEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzc0Mjc2OTIxMzk3NDIyMzc2OA&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Daily Check-in",
      width: 780,
      height: 2704,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYmI1ZGFhZDcwOTY4OWM1ZDE0MDUzNmM1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzc0Mjc2OTIxMzk3NDIyMzc2OA&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Weekly Trends",
      width: 780,
      height: 2710,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkYmJiNmJiOGMwMzU2YzM3NGFlMzA2NDE1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMzc0Mjc2OTIxMzk3NDIyMzc2OA&filename=&opi=89354086",
    },
  ],
  "atlas-cms": [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlMWYyYjA5YjMwNGU3NGRiZjI0MTgyOTQyEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYyNTY1NDQwMDI2NzU1MDYwMg&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Button",
      width: 2560,
      height: 6932,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkZTdmZjUwNDQwNWYxMGFiMDQ0Mjg4NGNmEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYyNTY1NDQwMDI2NzU1MDYwMg&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Color Tokens",
      width: 2560,
      height: 5516,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkZTg2NjAzMzIwOTY4ODBiZTVhMDc0NTJhEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYyNTY1NDQwMDI2NzU1MDYwMg&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Theme Studio",
      width: 2560,
      height: 3404,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhlNjhhOGQzY2UwNGU3NGRiOWIzMjJiMzU2EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxMDYyNTY1NDQwMDI2NzU1MDYwMg&filename=&opi=89354086",
    },
  ],
  nest: [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlMjE0ODFjZDcwOTY4ODBiZTVhMDc0NTJhEgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTc4NTA2NjY1OTM0MjgwODA4&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "iOS Home",
      width: 780,
      height: 3350,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhkYWJiNzAzN2QwOTY4OGZlNWQ4MjVmOWI3EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTc4NTA2NjY1OTM0MjgwODA4&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Pro Profile",
      width: 780,
      height: 5056,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhlNmNkYWNkM2YwNWYxMWMwNDc4MzIxMTk1EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTc4NTA2NjY1OTM0MjgwODA4&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Desktop Booking",
      width: 2560,
      height: 3004,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1YzhkZTNjODE5ZjAwMzU2YzM3NGFlMzA2NDE1EgsSBxCyr6b88wUYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTc4NTA2NjY1OTM0MjgwODA4&filename=&opi=89354086",
    },
  ],
  "signal-rooms": [
    {
      file: "cover",
      title: "Project Thumbnail",
      width: 2560,
      height: 2048,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YzhlMWZmZjg3ZjAwMjNiZTY4ZGM5MDJhNGNhEgsSBxCyr6b88wUYAZIBIgoKcHJvamVjdF9pZBIUQhIyODM4NTEwOTU5MjQxODY0NjI&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Discover Lobby",
      width: 780,
      height: 2772,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YzhkYjliZjlhNzUwOTY4ODBiZTVhMDc0NTJhEgsSBxCyr6b88wUYAZIBIgoKcHJvamVjdF9pZBIUQhIyODM4NTEwOTU5MjQxODY0NjI&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Live Room",
      width: 780,
      height: 1862,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YzhkZTc0ODJhZDMwMzU2YzM3NGFlMzA2NDE1EgsSBxCyr6b88wUYAZIBIgoKcHJvamVjdF9pZBIUQhIyODM4NTEwOTU5MjQxODY0NjI&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Host Profile",
      width: 780,
      height: 2816,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ6Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpZCiVodG1sXzAwMDY1YzhlNjZkZTgxMzUwMzU2YzM3NGFlMzA2NDE1EgsSBxCyr6b88wUYAZIBIgoKcHJvamVjdF9pZBIUQhIyODM4NTEwOTU5MjQxODY0NjI&filename=&opi=89354086",
    },
  ],
  "ledgerly-studio": [
    {
      file: "cover",
      title: "Experiments Board",
      width: 2560,
      height: 2712,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkOTBmZjljMDEwNWYxMWMwNDc4MzIxMTk1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU5NDE1OTcxMzA3MTI2OTkxMw&filename=&opi=89354086",
    },
    {
      file: "screen-1",
      title: "Experiments Board",
      width: 2560,
      height: 2712,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkOTBmZjljMDEwNWYxMWMwNDc4MzIxMTk1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU5NDE1OTcxMzA3MTI2OTkxMw&filename=&opi=89354086",
    },
    {
      file: "screen-2",
      title: "Experiment Detail",
      width: 2560,
      height: 3692,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkOTIwMDg4MjkwNWYxMGFiMDQ0Mjg4NGNmEgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU5NDE1OTcxMzA3MTI2OTkxMw&filename=&opi=89354086",
    },
    {
      file: "screen-3",
      title: "Metric Library",
      width: 2560,
      height: 2600,
      htmlUrl:
        "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ8Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpbCiVodG1sXzAwMDY1YzhkOTJiNmI2NmMwOTY4OWM1ZDE0MDUzNmM1EgsSBxCyr6b88wUYAZIBJAoKcHJvamVjdF9pZBIWQhQxNzU5NDE1OTcxMzA3MTI2OTkxMw&filename=&opi=89354086",
    },
  ],
};
