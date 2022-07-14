




import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles/App.css";



const MTable = () => {
  return (
      <div>


<div className='information'><p>開催情報</p></div>
<table class="tabledesign">
 <tbody><tr>
  <td>名前</td>
  <td>第一回 Web3.0ジビエ会</td>
  </tr>
 <tr>
  <td>日時</td>
  <td>6月13日（月）　18:00〜21:00</td>
 </tr>
 <tr>
  <td>会場</td>
  <td>六本木駅すぐ近く<br></br>（詳細は購入完了画面でお知らせします)</td>
 </tr>
 <tr>
  <td>主催</td>
  <td>合同会社gibierco</td>
 </tr>
 <tr>
  <td>料金</td>
  <td>50MATIC/0.017ETH,約4,000円</td>
 </tr>
 <tr>
  <td>人数</td>
  <td>先着10名</td>
 </tr>

</tbody></table>

      </div> 
  );
}



export default MTable;



