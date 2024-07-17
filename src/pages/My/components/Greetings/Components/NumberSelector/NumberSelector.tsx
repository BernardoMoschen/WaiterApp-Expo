import { Text } from "react-native";

// const selectInputClasses = {
//     [`& .${inputBaseClasses.input}`]: {
//         maxWidth: "156px",
//         padding: "unset",
//         color: "theme.neutral.600",
//         fontSize: "16px",
//         lineHeight: "24px",
//     },
//     "& .MuiSelect-icon": { top: 0 },
//     "& .MuiOutlinedInput-notchedOutline": {
//         border: "unset",
//     },
// };

// const MenuProps = {
//     PaperProps: {
//         sx: {
//             borderRadius: "12px",
//             padding: "8px",
//             maxHeight: 204,

//             "& .MuiList-root": {
//                 padding: 0,

//                 "& > li": {
//                     paddingLeft: "5px",
//                 },
//             },
//         },
//     },
// };

export const NumberSelector = () => {
    const number = 1234567890;
    //   const { subscriptions } = useRecoilValue(customerAtom)
    //   const [selected, setSelected] = useRecoilState(subscriptionSelector)

    //   const filteredSubscriptions = subscriptions.filter(subscription =>
    //     ['active', 'suspended', 'terminated'].includes(subscription.status),
    //   )

    return (
        // <FormControl>
        //   <Select
        //     value={selected.number}
        //     sx={selectInputClasses}
        //     MenuProps={MenuProps}
        //     onChange={e =>
        //       setSelected(
        //         subscriptions.find(({ number }) => number === e.target.value) ??
        //           selected,
        //       )
        //     }
        //     IconComponent={ExpandMore}
        //   >
        //     {filteredSubscriptions.map(({ number }) => (
        //       <MenuItem
        //         divider
        //         disableGutters
        //         key={number}
        //         value={number}
        //         sx={{
        //           color: 'theme.neutral.600',
        //           fontSize: '16px',
        //           lineHeight: '24px',
        //         }}
        //       >
        //         {formatNumber(number)}
        //       </MenuItem>
        //     ))}
        //   </Select>
        // </FormControl>
        <Text>{number}</Text>
    );
};
