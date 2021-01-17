import React, {useState} from 'react'; 
import { Box, Table, TableBody, TableCell, TableFooter, TableHeader, TableRow, Text, DateInput} from 'grommet';


const dateFormat = new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
  });


function CallHistory() {

    var currentDate = new Date(); 
    const [value, setValue] = useState([
        currentDate,
        '2021-01-20T15:27:42.920Z',
      ]);
      const onChange = event => {
        const nextValue = event.value;
        console.log('onChange', nextValue);
        setValue(nextValue);
      };

    return (
        <div>
            <div>
                <Box align="center" pad="large">
                    <DateInput
                    value={value}
                    buttonProps={{
                        label: `${dateFormat.format(
                        new Date(value[0]),
                        )} - ${dateFormat.format(new Date(value[1]))}`,
                    }}
                    onChange={onChange}
                    />
                </Box>
            </div>
            <div>
                <Table caption="Call History">
                    <TableHeader>
                    </TableHeader>
                </Table>
            </div>
        </div>
    )
}
export default CallHistory
