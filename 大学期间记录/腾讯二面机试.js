/**
 * 腾讯二面机试  
 * 周三晚上突然接收到腾讯的电话，比较懵，白天面试了两场，很累，状态不太好，面了大概半个钟头，表现的一般，以为挂了，
 * 没想到周四上午打电话过来约下午机试，一点都没有准备，面完以后就血崩了，这里做点记录，免得又踩到坑里  
 */

 /**
  * 第一题，纯js封装一个拖拽的组件，要求代码整洁，高可用，考虑边界值
  */

  function drag(elementId) {
      var element = document.getElementById(elementId);
      var position = {
          offsetX: 0, //偏移值X
          offsetY: 0, //偏移值Y
          state: 0
      }

      function getEvent(event) {
        return event || window.event;
      }

      element.addEventListener('mousedown', function(event) {
          var e = getEvent(event);
          position.offsetX = e.offsetX;
          position.offsetY = e.offsetY;
          position.state = 1;
      }, false)

      document.addEventListener('mousemove', function(event) {
          var e = getEvent(event);
          if (position.state) {
              position.endX = e.clientX;
              position.endY = e.clientY;

            // 设置绝对位置在文档中，鼠标当前位置-开始拖拽时的偏移位置
            element.style.position = 'absolute';
            element.style.top = position.endY - position.offsetY + 'px';
            element.style.left = position.endX - position.offsetX + 'px';
          }
      }, false)  

      element.addEventListener('mouseup', function(event) {
          position.state = 0;
      }, false)
  }