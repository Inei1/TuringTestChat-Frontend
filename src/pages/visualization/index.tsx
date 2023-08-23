import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { scaleLinear, scaleBand } from '@visx/scale';
import { AxisLeft, AxisBottom } from '@visx/axis';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { Footer } from '@/homepage/Footer';
import Header from '@/Header';

const Visualization = () => {
  const chartData = JSON.parse(`[{"label":"10","value":13204},{"label":"4","value":2628},{"label":"-1","value":1455},{"label":"-3","value":2019}]`);

  const width = 900;
  const height = 600;
  const margin = { top: 20, bottom: 20, left: 20, right: 20 };

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const x = (data: any) => {
    return data.label;
  }
  const y = (data: any) => {
    return data.value;
  }

  const xScale = scaleBand({
    range: [50, xMax],
    domain: chartData.map(x),
    padding: 0.4,
  });

  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, Math.max(...chartData.map(y))],
  });

  function BarGraph(props: any) {
    return (
      <svg width={width} height={height}>
        {chartData.map((data: any, i: any) => {
          const label = x(data);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - yScale(y(data));
          const barX = xScale(label);
          const barY = yMax - barHeight;
          return (
            <Group key={`bar-${i}`}>
              <AxisLeft left={50} scale={yScale} numTicks={4} label="count" />
              <Bar
                x={barX}
                y={barY}
                height={barHeight}
                width={barWidth}
                fill="#1F51FF"
              />
              <AxisBottom scale={xScale} label="detection points earned (two humans only)" top={yMax} />
            </Group>
          );
        })}
      </svg>
    );
  }
  return (
    <Box>
      <Head>
        <title>Visualization of chat data | Turing Test Chat</title>
      </Head>
      <Box sx={{
        minHeight: "102.5vh",
        backgroundColor: "secondary.main",
        background: "#FFFFFF",
        backgroundPosition: "center",
        backgroundSize: "100vw",
        maxWidth: "100vw",
      }}>
        <Container sx={{ mt: 5 }}>
          <BarGraph />
        </Container>
      </Box>
    </Box>
  )
}

export default Visualization;
