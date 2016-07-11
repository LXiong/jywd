module.exports = function(grunt) {
  grunt.initConfig({
    /**
     * step 1:
     * ������ļ������� ����Ŀ¼
     */
    copy: {
      hellosea:{
        files:{
		  "js/dist/main.js":["js/src/main.js"],
        }
      }
    },
    /**
     * step 2:
     * ����һ����ʱĿ¼
     * ����Ҫ�ϲ���js�ļ�תΪ���������������ֶ����ر����������ʱĿ¼
     */ 
    transport: {
      hellosea: {
        options: {
          // �Ƿ������Ե�ַ
          relative: true,
          // ���ɾ���������id�ĸ�ʽ Ĭ��ֵΪ {{family}}/{{name}}/{{version}}/{{filename}}
          format: '../js/{{filename}}' 
        },
        files: [{
		   expand:true,
          // ���·����ַ
          'cwd':'js/',
          // ��Ҫ���ɾ����������ļ�����
		  'src':"**/*.js",
          // ���ɴ�ŵ��ļ�Ŀ¼�������Ŀ¼�ṹ�� src ������ļ������е�Ŀ¼�ṹ����һ��
          'dest':'.build2'
        }]
      }
    },
    /**
     * step 3:
     * ����ʱĿ¼�¶����ľ��������ļ� �ϲ�Ϊ 1�� js �ļ�
     * ������ϲ��� js �ļ� ������ ���ǵ����Ŀ¼
     */
    concat: {
      hellosea: {
        options: {
          // �Ƿ������Ե�ַ
          relative: true
        },
        files: {
          // �ϲ�����ļ���ַ
          'js/dist/hellosea.js': ['.build/src/hellosea.js']
        }
      }
    },
    /**
     * step 4:
     * ѹ�� ��� �ϲ���� �ļ�
     */
    uglify: {
      hellosea: {
		options: {
          // �Ƿ������Ե�ַ
          relative: true
        },
        files: [
			/*
          "js/dist/common/common.js":["js/src/common/common.js"],
		  "js/dist/common/JSBridge.js":["js/src/common/JSBridge.js"],
		  "js/dist/common/locautil.js":["js/src/common/locautil.js"],
		  "js/dist/main.js":["js/src/main.js"],
		  "js/dist/model/4g/index.js":["js/src/model/4g/index.js"],
          "js/dist/model/index/index.js":["js/src/model/index/index.js"],
		  "js/dist/model/index/login.js":["js/src/model/index/login.js"],
		  "js/dist/model/4g/index.js":["js/src/model/4g/index.js"]*/
		  //"js/dist/*.js":["js/src/*.js"]
		  { 
		   expand:true,
		  'cwd':'js/src',
          // ��Ҫ���ɾ����������ļ�����
		  'src':'**/*.js',
          // ���ɴ�ŵ��ļ�Ŀ¼�������Ŀ¼�ṹ�� src ������ļ������е�Ŀ¼�ṹ����һ��
          'dest':'js/dist'}
        ]
      }
    },
    /**
     * step 5:
     * �������ʱĿ¼ɾ��
     */
    clean: {
      build: ['.build']
    }
  });
  grunt.loadNpmTasks('grunt-cmd-transport');
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['uglify','copy']);
  grunt.registerTask('build', function(name,step){
    switch(step){
      case "1":
        grunt.task.run('copy:' + name);
        break;
      case "2":
        grunt.task.run('transport:' + name);
        break;
      case "3":
        grunt.task.run('concat:' + name);
        break;
      case "4":
        grunt.task.run('uglify:' + name);
        break;
      case "5":
        grunt.task.run('clean:' + name);
        break;
      default:
        grunt.task.run(['copy:' + name,  'transport:' + name, 'concat:' + name, 'uglify:' + name, 'clean'])
        break;
    }
  });
};