import { FunctionComponent, SVGProps } from "react";

type Icon = FunctionComponent<SVGProps<SVGSVGElement>>;

export type PlanName = "essentials" | "freedom" | "free6m" | "free1y" | "beta";

export type PlanFeatures = {
    summary: Array<{
        title: string;
        subtitle: string;
        Icon: Icon;
    }>;
    details: Array<{
        title: string;
        subtitle?: string;
        Icon: Icon;
    }>;
    footer: string;
};

export type PlanResponse = {
    id: string;
    name: string;
    description: string;
    price: number;
    fees: number;
};

export type Plan = PlanResponse & PlanFeatures;
