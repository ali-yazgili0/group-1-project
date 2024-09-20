const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})

function loadTimesheet() {
    var iframe = document.getElementById('timesheet-frame');
    iframe.src = 'Timesheet.html'; // Add the URL of your timesheet file
    iframe.style.display = 'block'; // Show the iframe

	document.getElementById('assignCodeForm').style.display = 'none';
	document.getElementById('TeamManagementForm').style.display = 'none';
	document.getElementById('Dashboard-frame').style.display = 'none';
}
function loadassignCodeForm() {
    var iframe = document.getElementById('assignCodeForm');
    iframe.src = 'assignCode.html';  // Make sure this file exists
    iframe.style.display = 'block';
    
    // Hide the timesheet iframe if it's visible
    document.getElementById('timesheet-frame').style.display = 'none';
	document.getElementById('TeamManagementForm').style.display = 'none';
	document.getElementById('Dashboard-frame').style.display = 'none';
} 

function loadDashboardForm() {
    var iframe = document.getElementById('Dashboard-frame');
    iframe.src = 'Dashboard.html';  // Make sure this file exists
    iframe.style.display = 'block';
    
    // Hide the timesheet iframe if it's visible
    document.getElementById('timesheet-frame').style.display = 'none';
	document.getElementById('assignCodeForm').style.display = 'none';
	document.getElementById('TeamManagementForm').style.display = 'none';
}
function loadTeamManagementForm() {
    var iframe = document.getElementById('TeamManagementForm');
    iframe.src = 'TeamManagement.html';  // Make sure this file exists
    iframe.style.display = 'block';
    
    // Hide the timesheet iframe if it's visible
    document.getElementById('timesheet-frame').style.display = 'none';
	document.getElementById('assignCodeForm').style.display = 'none';
	document.getElementById('Dashboard-frame').style.display = 'none';
}