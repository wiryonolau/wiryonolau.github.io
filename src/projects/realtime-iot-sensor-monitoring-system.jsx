export const meta = {
    title: "Realtime IoT Sensor Monitoring System",
    slug: "realtime-iot-sensor-monitoring-system",
    short: "Real time IoT monitoring platform for container data center environments with MQTT based telemetry and live visual dashboards.",
};

export const content = {
    objective: `
Develop a real time IoT monitoring platform for container data center environments to continuously observe environmental conditions such as temperature and humidity while reducing the need for manual on site inspection and minimizing operational disruption.
  `,

    approach: `
Designed a lightweight event driven monitoring architecture optimized for low latency telemetry, simplified deployment, and operational reliability. The system uses MQTT for efficient sensor communication and Server Sent Events (SSE) for realtime dashboard updates without requiring full duplex communication. Open source technologies and self built hardware were utilized to maintain flexibility and cost efficiency while supporting live monitoring from both local control rooms and remote VPN connected environments.
  `,

    implementation: `
Built the backend using Python with asynchronous processing through aiohttp and asyncio to efficiently handle realtime sensor streams and concurrent dashboard clients. Developed custom sensor hardware using Arduino Nano for sensor interfacing, Arduino Uno as gateway controllers, and ESP32 devices for wireless telemetry transmission. Gateway devices aggregate sensor data and forward updates through MQTT using Mosquitto as the broker, while ESP32 based nodes can also publish directly to MQTT. Monitoring data is stored in TimescaleDB for historical charting and visualization purposes.

The frontend dashboard was developed using React with Chart.js and react-grid-layout to provide customizable realtime monitoring interfaces. Users can create visual layouts using background images representing physical infrastructure layouts, then map sensor widgets directly onto specific locations for intuitive operational visibility. SSE was selected instead of WebSocket due to simpler HTTP based security integration, lower implementation complexity for one way telemetry streaming, and stability considerations observed with websocket handling at the time. Browser based SSE clients automatically reconnect during connection interruptions, ensuring continuous monitoring visibility.

The system is fully containerized using Docker and deployed on Linux infrastructure. Realtime updates are streamed with sub second latency depending on sensor update intervals, supporting monitoring across more than 30 distributed sensor devices simultaneously. Threshold based visual alerts are implemented directly within the dashboard interface, allowing operators to immediately identify abnormal environmental conditions through highlighted visual indicators.
  `,

    outcome: `
Delivered a scalable realtime monitoring platform that significantly reduced the need for manual environmental inspection inside container data center environments. Previously, operators were required to physically check environmental conditions on scheduled intervals, increasing operational overhead and contributing to unnecessary temperature fluctuations caused by repeated physical access. By centralizing live monitoring into visual dashboards accessible from control rooms and remote VPN connected environments, the system improved operational visibility, reduced manual intervention, and enabled faster identification of abnormal temperature and humidity conditions while maintaining a lightweight and cost effective infrastructure.
  `,
};
