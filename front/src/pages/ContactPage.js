import DefaultPage from '../components/DefaultPage';

function ContactPage(){

    return(
    
        <div key="navigation">
              <DefaultPage/>
        <h1>ContactPage</h1>

<div>
<from>
  <label for="fname">Name</label>
  <input type="text" id="name" name="name"/>

  <label for="lname">Email:</label>
  <input type="text" id="email" name="email"/>


  <label for="phone">Phone</label>
  <input type="text" id="phone" name="phone"/>



  <label for="subject">Subject</label>
  <input type="text" id="subject" name="subject"/>


  <label for="message">Message</label>
  <input type="text" id="message" name="message"/>


  <label for="checkbox">โดยการคลิกและกดตกลงที่ช่องนี้ ท่านได้ตกลงยินยอมให้ข้อมูลส่วนตัวดังกล่าวข้างต้น และยินยอมให้ผู้ให้บริการเว็บไซต์ และ/หรือผู้ที่ได้รับมอบหมาย สามารถเก็บหรือใช้ข้อมูลที่ท่านได้ใส่มาในแบบฟอร์มนี้ในการติดต่อกับท่าน รวมถึงให้ข้อมูลต่างๆ เกี่ยวกับบริการอื่นๆ ของ เรา ทั้งนี้ ข้อมูลส่วนบุคคลนี้จะได้รับการปฏิบัติตามนโยบายความเป็นส่วนตัวของเรา ศึกษารายละเอียดเพิ่มเติมได้ที่นี่ คลิก</label>
  <input type="checkbox" value="checkbox"/>
  <input type="submit" value="Submit"/>




</from>
</div>
    </div>
   )
  }
  
  
  export default ContactPage