import { FC } from "react";
import { Chip, ChipProps, useTheme } from "react-native-paper";
import { capitalize } from "lodash";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

type Props = {
    variant: ChipProps["mode"];
    status: "active" | "suspended" | "terminated" | "pendingActive";
};

export const SubscriptionStatusChip: FC<Props> = ({ status }) => {
    const theme = useTheme() as any;

    return (
        <Chip
            mode="flat"
            compact
            icon={() => (
                <Icon
                    name={
                        status === "active"
                            ? "check"
                            : status === "suspended"
                            ? "alert-circle-outline"
                            : "close-octagon-outline"
                    }
                    size={16}
                    color={
                        status === "active"
                            ? theme.colors.success.base
                            : status === "suspended"
                            ? theme.colors.warning.base
                            : theme.colors.error.base
                    }
                />
            )}
            selectedColor={
                status === "active"
                    ? theme.colors.success.base
                    : status === "suspended"
                    ? theme.colors.warning.base
                    : theme.colors.error.base
            }
            style={{
                paddingVertical: 0,
                paddingHorizontal: 5,
                height: "auto",
                borderWidth: 1,
                borderRadius: 16,
            }}
            textStyle={{
                fontWeight: 600,
                marginVertical: 0,
                marginHorizontal: 0,
                fontSize: 14,
                lineHeight: 20,
                color:
                    status === "active"
                        ? theme.colors.success["700"]
                        : status === "suspended"
                        ? theme.colors.warning["700"]
                        : theme.colors.error["700"],
            }}
        >
            {capitalize(status)}
        </Chip>
    );
};
