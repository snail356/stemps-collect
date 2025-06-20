import { defineStore } from "pinia";
import type { StempBoxState } from "@/types/interfaces";

export const useStempBoxStore = defineStore("stempBox", {
  state: (): StempBoxState => ({
    icons: ["fa-solid fa-star", "fa-solid fa-heart", "fa-solid fa-lemon"],
    selectedIcon: "fa-solid fa-star", // 預設選中第一個 icon
  }),
  actions: {
    setSelectedIcon(icon: string) {
      this.selectedIcon = icon;
    },
  },
});
