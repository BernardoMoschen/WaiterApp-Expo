import { atom } from "recoil";
import { Plan } from "../types/catalog";

export const selectedPlanAtom = atom<Plan | null>({
    key: "selected-plan",
    default: null,
});
