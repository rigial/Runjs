export function fileIcon(fileSuffix: string) {
  const iconMap: Record<string, string> = {
    js: 'https://img.icons8.com/color/48/000000/javascript.png',
    css: 'https://img.icons8.com/color/48/000000/css3.png',
    html: 'https://img.icons8.com/color/48/000000/html-5.png',
    json: 'https://img.icons8.com/color/48/000000/json.png',
  };
  const iconSrc = iconMap[fileSuffix];
  return iconSrc ? <img src={iconSrc} /> : null;
}
