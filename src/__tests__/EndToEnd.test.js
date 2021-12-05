import React from 'react';
import puppeteer from 'puppeteer';
// import { mockData } from '../helpers/mock-data';

jest.setTimeout(300000);

describe('show/hide event details', () => {
	let browser, page, eventDetails;
	beforeAll(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
		eventDetails = await page.$('.event .more-info');
		await page.goto('http://localhost:3000/');
		await page.waitForSelector('.event');
	});

	afterAll(() => browser.close());

	test('An event element is collapsed by default', async () => {
		expect(eventDetails).toBeNull();
	});

	test('User can expand an event to see its details', async () => {
		await page.click('.event .details-btn');
		expect(eventDetails).toBeDefined();
	});

	test('User can collapse an event by clicking "details-btn" again', async () => {
		await page.click('.event .details-btn');
		expect(eventDetails).toBeNull();
	});
});

// describe('filter events by city', () => {
// 	let browser, page, suggestionList, event;
// 	beforeAll(async () => {
// 		browser = await puppeteer.launch();
// 		page = await browser.newPage();
// 		event = await page.$('.event');
// 		suggestionList = await page.$('.suggestions li');
// 		await page.goto('http://localhost:3000/');
// 		await page.waitForSelector('.city');
// 		await page.waitForSelector('.event');
// 		await page.waitForSelector('.suggestions li');
// 	});

// 	afterAll(() => browser.close());

// 	test('When user has not searched for a city, show upcoming events from all cities.', async () => {
// 		expect(event).toHaveLength(mockData.length);
// 	});

// 	test('User should see a list of suggestions when they search for a city', async () => {
// 		await page.type('.city', 'Berlin, Germany');
// 		expect(suggestionList).toHaveLength(1);
// 	});

// 	test('User can select a city from the suggested list', async () => {
// 		await page.click(suggestionList).at(0);
// 		expect(event).toHaveLength(1);
// 	});
// });
