      const usuarios = [
            'kyle',
            'laura',
            'melisa',
            'diana',
            'dayana',
            'milena',
            'alicia',
            'orlando'
        ]

        function ejecutarForEach (){
            usuarios.forEach(u => {
                document.writeln(`${u} <br>`);
            });
                      
        }

        function ejecutarMap (){
            usuarios.map(u =>{
                document.writeln(`${u}<br>`);
            });
        }