
function openAccountModal(type) {
    if(type == 1) {
        document.getElementById('accountModal1').style.display = 'flex';
    } else  {
        document.getElementById('accountModal2').style.display = 'flex';
    }
}

function copyAccountNumber(accountId) {
    var accountNumber = document.getElementById(accountId).innerText;
    navigator.clipboard.writeText(accountNumber).then(function() {
        alert('계좌번호가 복사되었습니다: ' + accountNumber);
    }, function(err) {
        alert('복사 실패: ', err);
    });
}

function closeAccountModal(type) {
    if(type == 1) {
        document.getElementById('accountModal1').style.display = "none";
    } else {
        document.getElementById('accountModal2').style.display = "none";
    }
}
