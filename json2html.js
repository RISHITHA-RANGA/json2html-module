export default function json2html(data) {
    // Define table headers
    const headers = ["Name", "Age", "Gender"];
    
    // Start building the HTML table as a string
    let html = `<table data-user="rangarishitha@gmail.com">`;
    
    // Add the table header
    html += `<thead><tr>`;
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += `</tr></thead>`;
    
    // Add the table body
    html += `<tbody>`;
    data.forEach(item => {
      html += `<tr>`;
      headers.forEach(header => {
        html += `<td>${item[header] || ""}</td>`;  // Use an empty string if data is missing
      });
      html += `</tr>`;
    });
    html += `</tbody></table>`;
    
    return html;
  }
  