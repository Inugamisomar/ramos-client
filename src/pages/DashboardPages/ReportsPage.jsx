import { Typography, Box, Stack, Card, CardContent } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

function ReportsPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        📊 Reports Dashboard
      </Typography>

      <Stack spacing={3}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Typography variant="h6">Monthly Traffic</Typography>
            <BarChart
              series={[{ data: [100, 200, 150, 300], label: "Visitors" }]}
              height={300}
              xAxis={[{ data: ["Jan", "Feb", "Mar", "Apr"], scaleType: "band" }]}
            />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default ReportsPage;