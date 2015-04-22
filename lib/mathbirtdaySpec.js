describe("MathBirtday Test Suite", function(){
	var mb,
		now,
		leapYear;

	beforeEach(function(){
		mb = new MathBirthday;
		now = moment();
	});

	it("should handle correctly if I was born today.", function(){
		var state = mb.calc(now, now);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(mb.base);
		expect(state.todayDaysAge).toEqual(0);
		expect(state.nextBirthday).toMatch(moment().add(mb.base, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 10 days ago.", function(){
		var birthdate = moment().subtract(mb.base, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 2);
		expect(state.isToday).toBe(true);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(mb.base);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 100 days ago.", function(){
		var birthdate = moment().subtract(Math.pow(mb.base, 2), 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 3);
		expect(state.isToday).toBe(true);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(Math.pow(mb.base, 2));
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 1000 days ago.", function(){
		var birthdate = moment().subtract(Math.pow(mb.base, 3), 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 4);
		expect(state.isToday).toBe(true);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(Math.pow(mb.base, 3));
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born yesterday.", function(){
		var daysPast = 1,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 1);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 11 days ago.", function(){
		var daysPast = 11,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 2);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 101 days ago.", function(){
		var daysPast = 101,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 3);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 1001 days ago.", function(){
		var daysPast = 1001,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 4);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 10001 days ago.", function(){
		var daysPast = 10001,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 5);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I was born 100001 days ago.", function(){
		var daysPast = 100001,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 6);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I will be born 101 days ahead.", function(){
		var daysPast = -101,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 1);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	it("should handle correctly if I will be born 1001 days ahead.", function(){
		var daysPast = -1001,
			birthdate = moment().subtract(daysPast, 'days'),
			state = mb.calc(now.clone(), birthdate.clone()),
			nextAmountOfDays = Math.pow(mb.base, 1);
		expect(state.isToday).toBe(false);
		expect(state.nextDaysAge).toEqual(nextAmountOfDays);
		expect(state.todayDaysAge).toEqual(daysPast);
		expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
	});

	describe("On a leap year", function(){
		beforeEach(function(){
			now = moment("20080229", "YYYYMMDD");
		});

		it("should handle correctly if I was born 10 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 1),
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 2);
			expect(state.isToday).toBe(true);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 100 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 2),
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 3);
			expect(state.isToday).toBe(true);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 1000 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 3),
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 4);
			expect(state.isToday).toBe(true);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 10000 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 4),
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 5);
			expect(state.isToday).toBe(true);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 100000 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 5),
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 6);
			expect(state.isToday).toBe(true);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 1 day ago on a leap year.", function(){
			var daysPast = 1,
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 1);
			expect(state.isToday).toBe(false);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 11 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 1) + 1,
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 2);
			expect(state.isToday).toBe(false);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 101 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 2) + 1,
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 3);
			expect(state.isToday).toBe(false);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 1001 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 3) + 1,
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 4);
			expect(state.isToday).toBe(false);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 10001 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 4) + 1,
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 5);
			expect(state.isToday).toBe(false);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});

		it("should handle correctly if I was born 100001 days ago on a leap year.", function(){
			var daysPast = Math.pow(mb.base, 5) + 1,
				birthdate = now.clone().subtract(daysPast, 'days'),
				state = mb.calc(now.clone(), birthdate.clone()),
				nextAmountOfDays = Math.pow(mb.base, 6);
			expect(state.isToday).toBe(false);
			expect(state.nextDaysAge).toEqual(nextAmountOfDays);
			expect(state.todayDaysAge).toEqual(daysPast);
			expect(state.nextBirthday).toMatch(birthdate.clone().add(nextAmountOfDays, 'days').format(mb.format));
		});
	});

});