document.addEventListener('DOMContentLoaded', function ()
{
	const submitButtons:NodeListOf<HTMLButtonElement> = document.querySelectorAll('button[type=submit][loading]');
		
	submitButtons.forEach(function (button)
	{
		button.closest('form')?.addEventListener('submit', function ()
		{			
			startLoadingButton(button as HTMLButtonElement);
		});
	});
  
	const loadingLinks = document.querySelectorAll('a[loading]');
	loadingLinks.forEach(function (link)
	{
		link.addEventListener('click', function ()
		{
			startLoadingButton(link as HTMLLinkElement);
		});
	});
});
  
function startLoadingButton(button: HTMLButtonElement | HTMLLinkElement)
{
	let widthButton = window.getComputedStyle(button).getPropertyValue('width');
	let style = button.getAttribute('data-loading-style') || 'border';
	let originalContent = button.innerHTML;

	button.classList.add('loading-button');
	button.classList.add('disabled');
	
	button.setAttribute('data-original-content', originalContent);
	button.disabled = true;
	button.innerHTML = '<span class="spinner-' + style + ' spinner-' + style + '-sm" role="status" aria-hidden="true"></span>';
	button.style.width = widthButton;
}
  
function stopLoadingButtons()
{
	const loadingButtons = document.querySelectorAll('.loading-button');

	const loadingButtonsArray = Array.from(loadingButtons);

	loadingButtonsArray.forEach(function (button)
	{
		//@ts-ignore
		button.disabled = false;
		
		button.classList.remove('disabled');
		
		const originalContent = button.getAttribute('data-original-content');
		
		if(originalContent !== null)
		{
			button.innerHTML = originalContent;
		}
	});
}