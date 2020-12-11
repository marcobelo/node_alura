kill_all:
	docker-compose -f course_1/docker-compose.yml kill

c1_run:
	make kill_all
	docker-compose -f course_1/docker-compose.yml build
	docker-compose -f course_1/docker-compose.yml up