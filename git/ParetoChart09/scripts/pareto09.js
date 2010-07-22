
		var count=1;
	  function add(){
	 
		var li = new Element('li',{id:'div_data_entry_'+count});
		var text1 = new Element('input', {id:'t1'+count, size: '30'});
		var text2 = new Element('input', {id:'t2'+count, size: '10'});
		var remove = new Element('a', {'class': 'delete', id:'remove_click_'+count}).update("&nbsp;");
		li.insert(text1);
		li.insert(text2);
		li.insert(remove);
		$("data-input").appendChild(li);
		
		
		text1.activate();
		
		$("t2"+count).observe("keydown",function(e) 
		{
			var el = Event.element(e);
			if ((e.keyCode === Event.KEY_RETURN))
			{
				if(!el.ancestors().first().next())
				{
					e.stop();
					add();
				}
				else
				{
					el.ancestors().first().next().childElements().first().activate();
					e.stop();
				}
			};
			if ((e.keyCode === Event.KEY_TAB))
			{
				
				if(!el.ancestors().first().next())
				{
					e.stop();
					add();
				}
				else
				{
					el.ancestors().first().next().childElements().first().activate();
					e.stop();
				}				
			};
		}.bind(this));
		
		$("t1"+count).observe('keydown',function(e)
														  {
			var el = Event.element(e);
				if ((e.keyCode === Event.KEY_RETURN))
				{
					if(!el.ancestors().first().next())
					{
						this.add();
					}
					else
					{
						el.ancestors().first().next().childElements().first().activate();
					}
					
				}
		}.bind(this));
		
		$("remove_click_"+count).observe('click',function(e) 
		{
			if (e) 
			
			var count = this.id.split("_")[2];
			$("div_data_entry_"+count).remove();
		});
		
		$("t1"+count).focus();
		count++;
	}
	  function getData()
	 {
		var data = new Array;
		data=[];
		var i = 0;
		var count;
		var flag = false;
		$("data-input").childElements().each(function(el) 
													  {
			var n;
			if (el.visible()) 
			{
				count = el.id.split("_")[3];
				$("t2"+count).setStyle({background:"#fff"})
				$("t1"+count).setStyle({background:"#fff"})
				if($("t2"+count).value.strip() == "")
				{
					$("t2"+count).setStyle({background:"yellowgreen"});
					flag = true;
				};
				
				n = $("t1"+count).value;
				n = new Number(n);
				if(($("t1"+count).value.strip() == "") | (! isNaN(n)))
				{
					$("t1"+count).setStyle({background:"yellowgreen"});
					flag = true;
				};
				
				n = $("t2"+count).value;
				n = new Number(n);
				if (isNaN(n) || $("t2"+count).value.include(".") ) 
				{
					$("t2"+count).setStyle({background:"yellowgreen"});
					flag = true;
				};
				data.push({string:($("t1"+count).value).toLowerCase(), values:parseInt($("t2"+count).value, 10)}).evalJSON;
				//alert(data[0].string);
				i++;
			}
		});
		var formatted = '';
		if (flag) {
			alert("ERRONEOUS DATA!!!!!please give correct values...");
		}else{			
			for(j=0;j<i;j++)
			{	
				var cartItem = data[j];
			formatted += 'defect:'+cartItem.string + '     and     '+'frequency:'+cartItem.values+'\n';
				
			}
			alert(formatted);
			
		};
	}
	

	

