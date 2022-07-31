export const parseCropData = (messageHistory: any): any => {
  const data = messageHistory.reduce(
    (data: any, message: any) => {
      const { humidity, ph, ec, temperature } = message;
      // formats date variable to 'DD/MM'
      const date = new Date(message.dateReceived).toLocaleString().split(',')[0].slice(0, -5);
      if ([humidity, ph, ec, temperature].some((field) => Boolean(field))) {
        data.labels.push(date);
        data.temperatures.push(temperature || 0);
        data.ecs.push(ec || 0);
        data.phs.push(ph || 0);
        data.humidities.push(humidity || 0);
      }
      return data;
    },
    { labels: [], temperatures: [], humidities: [], phs: [], ecs: [] }
  );
  return data;
};
