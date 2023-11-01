import { useState, useRef, useEffect } from "react";
import ExcelJS from "exceljs";
import { Helmet } from "react-helmet";

export default function QuestionnaireResult() {
  const [displayLst, setDisplayLst] = useState([]);
  let formattedData = []
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetch("https://78dxhy83s3.execute-api.ap-northeast-1.amazonaws.com/default/ConnectDB?mode=fetchall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        
        Object.keys(data).forEach(function (key) {
            console.log(data[key])
            console.log(data[key] && data[key]['Q2'] ? data[key]['Q2'].toString() : "")
            formattedData.push( {
              "ID": key,
              "Q1": data[key] && data[key]['Q1'] !== undefined ? data[key]['Q1'].toString() : "",
              "Q1-1": data[key] && data[key]['Q1-1'] !== undefined ? data[key]['Q1-1'].toString() : "",
              "Q2": data[key] && data[key]['Q2'] !== undefined ? data[key]['Q2'].toString() : "",
              "Q3-1": data[key] && data[key]['Q3-1'] !== undefined ? data[key]['Q3-1'].toString() : "",
              "Q3-2": data[key] && data[key]['Q3-2'] !== undefined ? data[key]['Q3-2'].toString() : "",
              "Q3-3A": data[key] && data[key]['Q3-3A'] !== undefined ? data[key]['Q3-3A'].toString() : "",
              "Q3-3B": data[key] && data[key]['Q3-3B'] !== undefined ? data[key]['Q3-3B'].toString() : "",
              "Q3-3C": data[key] && data[key]['Q3-3C'] !== undefined ? data[key]['Q3-3C'].toString() : "",
              "Q3-3D": data[key] && data[key]['Q3-3D'] !== undefined ? data[key]['Q3-3D'].toString() : "",
              "Q3-3E": data[key] && data[key]['Q3-3E'] !== undefined ? data[key]['Q3-3E'].toString() : "",
              "Q3-3F": data[key] && data[key]['Q3-3F'] !== undefined ? data[key]['Q3-3F'].toString() : "",
              "Q3-3G": data[key] && data[key]['Q3-3G'] !== undefined ? data[key]['Q3-3G'].toString() : "",
              "Q3-3H": data[key] && data[key]['Q3-3H'] !== undefined ? data[key]['Q3-3H'].toString() : "",
              "Q3-3I": data[key] && data[key]['Q3-3I'] !== undefined ? data[key]['Q3-3I'].toString() : "",
              "Q3-4": data[key] && data[key]['Q3-4'] !== undefined ? data[key]['Q3-4'].toString() : "",
              "Q3-5": data[key] && data[key]['Q3-5'] !== undefined ? data[key]['Q3-5'].toString() : "",
              "Q4": data[key] && data[key]['Q4'] !== undefined ? data[key]['Q4'].toString() : "",
              "Q4-1A": data[key] && data[key]['Q4-1A'] !== undefined ? data[key]['Q4-1A'].toString() : "",
              "Q4-1B": data[key] && data[key]['Q4-1B'] !== undefined ? data[key]['Q4-1B'].toString() : "",
              "Q4-2": data[key] && data[key]['Q4-2'] !== undefined ? data[key]['Q4-2'].toString() : "",
              "Q5": data[key] && data[key]['Q5'] !== undefined ? data[key]['Q5'].toString() : "",
              "Q5-1": data[key] && data[key]['Q5-1'] !== undefined ? data[key]['Q5-1'].toString() : "",
              "Q6": data[key] && data[key]['Q6'] !== undefined ? data[key]['Q6'].toString() : "",
              "Q7": data[key] && data[key]['Q7'] !== undefined ? data[key]['Q7'].toString() : "",
              "Q8-1": data[key] && data[key]['Q8-1'] !== undefined ? data[key]['Q8-1'].toString() : "",
              "Q8-2": data[key] && data[key]['Q8-2'] !== undefined ? data[key]['Q8-2'].toString() : "",
              "Q8-3": data[key] && data[key]['Q8-3'] !== undefined ? data[key]['Q8-3'].toString() : "",
              "Q9-1": data[key] && data[key]['Q9-1'] !== undefined ? data[key]['Q9-1'].toString() : "",
              "Q9-2": data[key] && data[key]['Q9-2'] !== undefined ? data[key]['Q9-2'].toString() : "",
              "Q10-1": data[key] && data[key]['Q10-1'] !== undefined ? data[key]['Q10-1'].toString() : "",
              "Q10-2": data[key] && data[key]['Q10-2'] !== undefined ? data[key]['Q10-2'].toString() : "",
              "Q11-1": data[key] && data[key]['Q11-1'] !== undefined ? data[key]['Q11-1'].toString() : "",
              "Q11-2": data[key] && data[key]['Q11-2'] !== undefined ? data[key]['Q11-2'].toString() : "",
              "Q12-1": data[key] && data[key]['Q12-1'] !== undefined ? data[key]['Q12-1'].toString() : "",
              "Q12-2": data[key] && data[key]['Q12-2'] !== undefined ? data[key]['Q12-2'].toString() : "",
              "Q13-1": data[key] && data[key]['Q13-1'] !== undefined ? data[key]['Q13-1'].toString() : "",
              "Q13-2": data[key] && data[key]['Q13-2'] !== undefined ? data[key]['Q13-2'].toString() : "",
              "Q14-1": data[key] && data[key]['Q14-1'] !== undefined ? data[key]['Q14-1'].toString() : "",
              "Q14-2": data[key] && data[key]['Q14-2'] !== undefined ? data[key]['Q14-2'].toString() : "",
              "Q15-1": data[key] && data[key]['Q15-1'] !== undefined ? data[key]['Q15-1'].toString() : "",
              "Q15-2": data[key] && data[key]['Q15-2'] !== undefined ? data[key]['Q15-2'].toString() : "",
              "Q16-1": data[key] && data[key]['Q16-1'] !== undefined ? data[key]['Q16-1'].toString() : "",
              "Q16-2": data[key] && data[key]['Q16-2'] !== undefined ? data[key]['Q16-2'].toString() : "",
              "Q17-1": data[key] && data[key]['Q17-1'] !== undefined ? data[key]['Q17-1'].toString() : "",
              "Q17-2": data[key] && data[key]['Q17-2'] !== undefined ? data[key]['Q17-2'].toString() : "",
              "Q18": data[key] && data[key]['Q18'] !== undefined ? data[key]['Q18'].toString() : "",
            })         
          })
        console.log(formattedData)
        // let lst = Object.values(res)
        // console.log(lst)
        setDisplayLst(formattedData);
        console.log(displayLst)
      });
  }, []);

  

  const handlerClickDownloadButton = async(e,format)=> {
    e.preventDefault();
    const workbook = new ExcelJS.Workbook();
    workbook.addWorksheet("sheet1");
    const worksheet = workbook.getWorksheet("sheet1");

    worksheet.columns = [
        {header:"ID",key:"ID"},
        {header:"Q1",key:"Q1"},
        {header:"Q1-1",key:"Q1-1"},
        {header: "Q2",key: "Q2"},
        {header:"Q3-1",key: "Q3-1"},
        {header:"Q3-2",key: "Q3-2"},
        {header:"Q3-3A",key: "Q3-3A"},
        {header:"Q3-3B",key: "Q3-3B"},
        {header:"Q3-3C",key: "Q3-3C"},
        {header:"Q3-3D",key: "Q3-3D"},
        {header:"Q3-3E",key: "Q3-3E"},
        {header:"Q3-3F",key: "Q3-3F"},
        {header:"Q3-3G",key: "Q3-3G"},
        {header:"Q3-3H",key: "Q3-3H"},
        {header:"Q3-3I",key: "Q3-3I"},
        {header:"Q3-4",key: "Q3-4"},
        {header:"Q3-5",key: "Q3-5"},
        {header:"Q4",key: "Q4"},
        {header:"Q4-1A",key: "Q4-1A"},
        {header:"Q4-1B",key: "Q4-1B"},
        {header:"Q4-2",key: "Q4-2"},
        {header:"Q5",key: "Q5"},
        {header:"Q5-1",key: "Q5-1"},
        {header:"Q6",key: "Q6"},
        {header:"Q7",key: "Q7"},
        {header:"Q8-1",key: "Q8-1"},
        {header:"Q8-2",key: "Q8-2"},
        {header:"Q8-3",key: "Q8-3"},
        {header:"Q9-1",key: "Q9-1"},
        {header:"Q9-2",key: "Q9-2"},
        {header:"Q10-1",key: "Q10-1"},
        {header:"Q10-2",key: "Q10-2"},
        {header:"Q11-1",key: "Q11-1"},
        {header:"Q11-2",key: "Q11-2"},
        {header:"Q12-1",key: "Q12-1"},
        {header:"Q12-2",key: "Q12-2"},
        {header:"Q13-1",key: "Q13-1"},
        {header:"Q13-2",key: "Q13-2"},
        {header:"Q14-1",key: "Q14-1"},
        {header:"Q14-2",key: "Q14-2"},
        {header:"Q15-1",key: "Q15-1"},
        {header:"Q15-2",key: "Q15-2"},
        {header:"Q16-1",key: "Q16-1"},
        {header:"Q16-2",key: "Q16-2"},
        {header:"Q17-1",key: "Q17-1"},
        {header:"Q17-2",key: "Q17-2"},
        {header:"Q18",key: "Q18"},
    ];
    
    worksheet.addRows(displayLst)
   

    const uint8Array =
      format === "xlsx"
        ? await workbook.xlsx.writeBuffer() // xlsxの場合
        : await workbook.csv.writeBuffer(); // csvの場合
    const blob = new Blob([uint8Array], { type: "application/octet-binary" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "result." + format; // フォーマットによってファイル拡張子を変えている
    a.click();
    a.remove();
  }
  console.log(
    [
      {
        id: "f001",
        createdAt: 1629902208,
        name: "りんご"
      },
      {
        id: "f002",
        createdAt: 1629902245,
        name: "ぶとう"
      },
      {
        id: "f003",
        createdAt: 1629902265,
        name: "ばなな"
      }
    ]
  )

  return (
    <div className="main">
      <Helmet>
        <title>来場者アンケート結果出力</title>
      </Helmet>
      <div>
        <button onClick={(e) => handlerClickDownloadButton(e,"xlsx")}>
          Excel形式
        </button>
        <button onClick={(e) => handlerClickDownloadButton(e, "csv")}>
           CSV形式
       </button>
      </div>
    </div>
  );
}
// import React from "react";
// import ExcelJS from "exceljs";

// export default function App() {
//   const handlerClickDownloadButton = async (e, format) => {
//     e.preventDefault();

//     const workbook = new ExcelJS.Workbook();
//     workbook.addWorksheet("sheet1");
//     const worksheet = workbook.getWorksheet("sheet1");

//     worksheet.columns = [
//       { header: "ID", key: "id" },
//       { header: "作成日時", key: "createdAt" },
//       { header: "名前", key: "name" }
//     ];

//     worksheet.addRows([
//       {
//         id: "f001",
//         createdAt: 1629902208,
//         name: "りんご"
//       },
//       {
//         id: "f002",
//         createdAt: 1629902245,
//         name: "ぶとう"
//       },
//       {
//         id: "f003",
//         createdAt: 1629902265,
//         name: "ばなな"
//       }
//     ]);
//     let data = [
//       {
//         id: "f001",
//         createdAt: 1629902208,
//         name: "りんご"
//       },
//       {
//         id: "f002",
//         createdAt: 1629902245,
//         name: "ぶとう"
//       },
//       {
//         id: "f003",
//         createdAt: 1629902265,
//         name: "ばなな"
//       }
//     ]
//     console.log(data)

//     const uint8Array =
//       format === "xlsx"
//         ? await workbook.xlsx.writeBuffer() // XLSX形式
//         : await workbook.csv.writeBuffer(); // CSV形式
//     const blob = new Blob([uint8Array], { type: "application/octet-binary" });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "sampleData." + format; // フォーマットに基づいたファイル拡張子
//     a.click();
//     a.remove();
//   };

//   return (
//     <div style={{margin:100}}>
//       <header>
//         <h1>データ出力</h1>
//       </header>
//       <div>
//         <button onClick={(e) => handlerClickDownloadButton(e, "xlsx")}>
//           Excel形式
//         </button>
//         <button onClick={(e) => handlerClickDownloadButton(e, "csv")}>
//           CSV形式
//         </button>
//       </div>
//     </div>
//   );
// };
