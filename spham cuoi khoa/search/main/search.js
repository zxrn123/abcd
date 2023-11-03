//khai báo function tìm kiếm
function search_function(){
    //Giao diện của function tìm kiếm có 2 cái là thanh search (menu_search) và các ô kết quả (menu_item) nên vì vậy ta phải khai báo cho 2 cái này 2 biến. Trong đó, giá trị trả về các ô kết quả là một mảng nên phải thêm cú pháp Array.from()
        let menusearch = document.querySelector('#menu_search');
        let menuiteams = Array.from(document.querySelectorAll('.menu_item'));
    //Những chữ cái bắt đầu của các ô kết quả của chúng ta là chữ thường, vì vậy phải có một lệnh hạ từ chữ cái hoa chúng ta nhập vào ô input thành chữ cái thường
        menusearch.value = menusearch.value.toLowerCase();
    //Ẩn đi và hiện khi search
        menuiteams.forEach(function(el){
    //Khai báo một biến có tên text là chữ cái nhập vào ô tìm kiếm có tác dụng là lấy và nối giá trị text trong ô input của tất cả các text có trong element
            let text = el.innerText;
    //Nếu mà chứa từ khóa search thì sẽ hiện ra kết quả tìm kiếm
            if(text.indexOf(menusearch.value)>-1)
            el.style.display="";
    //Nếu không chữ thì không hiện
            else el.style.display="none";
        })
    }

var array = ['a','b','c','d'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

var users = [
    ['Nguyen Van A'],
    ['Nguyen Van B','16'],
    ['Nguyen Van C','17','Ha Noi'],
]
console.log(users[0][0]);
console.log(users[1][1]);
console.log(users[2][2]);

localStorage.setItem('name','Nguyen Van A');
localStorage.setItem('age','15');
localStorage.setItem('address','Ha Noi')
alert(localStorage.getItem('name')+' '+localStorage.getItem('age')+' tuoi'+' o '+localStorage.getItem('address'));

var student = [
    {
        ten:'Luu Tri Khoa Tung',
        tuoi:16,
        address:'Ha Noi'
    }
]
localStorage.setItem('student',JSON.stringify(student));
var hocsinh = localStorage.getItem('student');
alert(hocsinh);

sum = (a,b) => {alert(a+b)};
sum(2,3);

customer = (a,b) => {alert(a+b)};
customer('Khoa','Tung')