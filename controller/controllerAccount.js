app.controller("ctrlAdmin", function ($scope, $http) {
    $scope.users = [];
    $scope.user = {
        id: "",
        username: "",
        password: "",
        fullname: "",
        email: "",
        gender: "",
        birthday: "",
        marks: "",
    }

    const apiAccount = "http://localhost:3000/users";
    $http.get(apiAccount)
        .then(function (res) {
            $scope.users = res.data;
        }).catch(function (error) {
            console.log(error);
        });


    $scope.submitLogin = function (event) {
        event.preventDefault();
        $scope.flag = false;
        for (var i = 0; i < $scope.users.length; i++) {
            // Validate
            if ($scope.user.email == $scope.users[i].username && $scope.user.password == $scope.users[i].password) {
                $scope.flag = true;
                $scope.user = $scope.users[i];
            }


        }

        if ($scope.flag == true) {
            window.location.href = "#home";
            alert('Đăng nhập thành công');
        } else {
            alert('Đăng nhập thất bại');
        }

    }

});