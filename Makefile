yellow = \033[1;33m
green = \033[01;32m
blue = \033[01;34m
lblue = \033[00;34m
cyan = \033[00;36m
white = \033[1;37m
red = \033[1;31m
default = \033[0m

shell:
	@echo
	@echo "$(yellow)initial-avatar$(default)"
	@echo
	@echo "Start the server with:"
	@echo "$(green)polymer serve --hostname 0.0.0.0$(default)"
	@echo "Then request $(blue)http://localhost/$(default)"
	@echo
	@docker-compose run --service-ports --rm polymer-cli sh
