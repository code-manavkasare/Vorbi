export const colorpicker = (type: string) => {
  if (type == 'health') {
    return '#09BC8A';
  } else if (type == 'infrastructure') {
    return '#5762D5';
  } else if (type === 'social') {
    return '#FF729F';
  } else if (type === 'technology') {
    return '#247BA0';
  } else if (type === 'environment') {
    return '#EE6C4D';
  }
}
