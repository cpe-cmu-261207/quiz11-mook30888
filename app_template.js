//your code here!
document.addEventListener('DOMContentLoaded' , function() {
    function update() {


        const stuId = document.querySelector('#input-number').value
        const list = document.getElementById(stuId)
        const li = document.createElement('li')

        let grade = document.createElement('div')
        grade = document.getElementById('Se1')
        let g = grade.options[grade.selectedIndex].text
        let subjectID = document.createElement('span')
        subjectID = document.querySelector('#input-number').value
        grade.innerText(subjectID.querySelector('#input-number').value)
        li.append(g)
        li.append(subjectID)
        list.append(li)


        return false
    }
    document.querySelector('button').onclick = update
})