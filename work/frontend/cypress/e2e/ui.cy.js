/**
 * STRING_COMPETITION STRING_YEAR - STRING_TRADE - STRING_TITLE
 * Frontend - Task 1
 *
 * This file contains the unit tests performed on the frontend task.
 * You may look at the test cases but not modify them.
 *
 * !!! DO NOT EDIT THIS FILE !!!
 */

describe('UI Intro – Desktop', () => {
    beforeEach(() => {
        cy.viewport(1000, 660)
        cy.visit('/')
        // cy.wait(500)
    })

    afterEach(() => {
        // cy.wait(500)
    })

    it('should be centered', () => {
        cy.get('#intro').distance('body', 'top').then(top => {
            cy.get('#intro').distance('body', 'bottom').then(bottom => {
                expect(top).to.be.closeTo(bottom, 10)
            })
        })

        cy.get('#intro').distance('body', 'left').then(left => {
            cy.get('#intro').distance('body', 'right').then(right => {
                expect(left).to.be.closeTo(right, 10)
            })
        })
    })

    it('should have correct h1 styling', () => {
        cy.get('#intro h1').invoke('outerWidth').should(x => expect(x).to.be.closeTo(568, 20))
        cy.get('#intro h1')
            .should('have.css', 'font-family', 'Inter, sans-serif')
            .and('have.css', 'font-size', '40px')
            .and('have.css', 'font-weight', '500')
            .and('have.css', 'letter-spacing', '1.6px')
    })

    it('should have correct p styling', () => {
        cy.get('#intro p').invoke('outerWidth').should(x => expect(x).to.be.closeTo(480, 20))
        cy.get('#intro p')
            .should('have.css', 'font-family', 'Inter, sans-serif')
            .and('have.css', 'font-size', '20px')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'letter-spacing', '0')
    })

    it('should have correct spacing', () => {
        cy.get('#intro h1')
            .distance('#intro h1 + p', 'top')
            .should('be.equal', 8)

        cy.get('#intro p:first-of-type')
            .distance('#intro p + p', 'top')
            .should('be.equal', 8)

        cy.get('#intro p:last-of-type')
            .distance('#intro p:last-of-type + form', 'top')
            .should('be.equal', 32)
    })
})

describe('UI Intro – Mobile', () => {
    beforeEach(() => {
        cy.viewport(375, 667)
        cy.visit('/')
        // cy.wait(500)
    })

    afterEach(() => {
        // cy.wait(500)
    })

    it('should be centered', () => {
        cy.get('#intro').distance('body', 'top').should('be.equal', 0)

        cy.get('#intro').distance('body', 'left').then(left => {
            cy.get('#intro').distance('body', 'right').then(right => {
                expect(left).to.be.closeTo(right, 10)
            })
        })
    })

    it('should have correct h1 positioning', () => {
        cy.get('#intro h1').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))
        cy.get('#intro h1').invoke('outerHeight').should(x => expect(x).to.be.closeTo(120, 20))

        cy.get('#intro h1').distance('body', 'top').should('be.equal', 0)
        cy.get('#intro h1').distance('body', 'left').should('be.equal', 16)
        cy.get('#intro h1').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct p positioning', () => {
        cy.get('#intro p').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))
        cy.get('#intro p').distance('body', 'left').should('be.equal', 16)
        cy.get('#intro p').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct form positioning', () => {
        cy.get('#intro p').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))
        cy.get('#intro p').distance('body', 'left').should('be.equal', 16)
        cy.get('#intro p').distance('body', 'right').should('be.equal', 16)
    })
})

describe('UI App – Desktop', () => {
    beforeEach(() => {
        cy.viewport(1000, 660)
        cy.visit('/')
        cy.get('#image').selectFile('cypress/fixtures/mountain.png')
        // cy.wait(500)
    })

    afterEach(() => {
        // cy.wait(500)
    })

    it('should be centered', () => {
        cy.get('#app').distance('body', 'top').then(top => {
            cy.get('#app').distance('body', 'bottom').then(bottom => {
                expect(top).to.be.closeTo(bottom, 10)
            })
        })

        cy.get('#app').distance('body', 'left').then(left => {
            cy.get('#app').distance('body', 'right').then(right => {
                expect(left).to.be.closeTo(right, 10)
            })
        })
    })

    it('should have correct h1 styling', () => {
        cy.get('#app h1').invoke('outerWidth').should(x => expect(x).to.be.closeTo(484, 20))
        cy.get('#app h1')
            .should('have.css', 'font-family', 'Inter, sans-serif')
            .and('have.css', 'font-size', '40px')
            .and('have.css', 'font-weight', '500')
            .and('have.css', 'letter-spacing', '1.6px')
    })

    it('should have correct h1 positioning', () => {
        cy.get('#app h1').distance('body', 'top').should(x => expect(x).to.be.closeTo(28, 10))
        cy.get('#app h1').distance('body', 'left').should('be.equal', 16)
    })

    it('should have correct filter select styling', () => {
        cy.get('#app .add-filter').invoke('outerWidth').should(x => expect(x).to.be.closeTo(484, 20))

        cy.get('#app .add-filter')
            .should('have.css', 'border-width', '2px')
            .and('have.css', 'border-style', 'solid')
            .and('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-radius', '8px')

        cy.get('#app .add-filter').then(outer => {
            cy.get('#app .add-filter select').then(inner => {
                const getValue = (cssValue) => parseInt(cssValue.replace('px', ''), 10);
                const stylesOuter = cy.state('window').getComputedStyle(outer[0]);
                const stylesInner = cy.state('window').getComputedStyle(inner[0]);
                expect(getValue(stylesOuter.paddingTop) || getValue(stylesInner.paddingTop)).to.equal(8)
                expect(getValue(stylesOuter.paddingBottom) || getValue(stylesInner.paddingBottom)).to.equal(8)
                expect(getValue(stylesOuter.paddingLeft) || getValue(stylesInner.paddingLeft)).to.equal(12)
                expect(getValue(stylesOuter.paddingRight) || getValue(stylesInner.paddingRight)).to.equal(12)
            })
        })

        cy.get('#app .add-filter svg').invoke('outerWidth').should('be.equal', 16)
        cy.get('#app .add-filter svg').invoke('outerHeight').should('be.equal', 16)
        cy.get('#app .add-filter svg').distance('.add-filter', 'top').should(x => expect(x).to.be.closeTo(14, 2))
        cy.get('#app .add-filter svg').distance('.add-filter', 'bottom').should(x => expect(x).to.be.closeTo(14, 2))
        cy.get('#app .add-filter svg').distance('.add-filter', 'right').should(x => expect(x).to.be.closeTo(14, 2))

        cy.get('#app .add-filter').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('#app .add-filter').realHover()
        cy.get('#app .add-filter').should('have.css', 'background-color', 'rgb(245, 245, 245)')
    })

    it('should have correct filter select positioning', () => {
        cy.get('#app .add-filter').distance('#app h1', 'bottom').should('be.equal', 8)
        cy.get('#app .add-filter').distance('body', 'left').should('be.equal', 16)
    })

    it('should have correct copy button styling', () => {
        cy.get('#app #copy').invoke('outerWidth').should(x => expect(x).to.be.closeTo(234, 10))

        cy.get('#app #copy')
            .should('have.css', 'border-width', '2px')
            .and('have.css', 'border-style', 'solid')
            .and('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-radius', '8px')

        cy.get('#app #copy').should('have.css', 'padding', '8px 12px')

        cy.get('#app #copy').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('#app #copy').realHover()
        cy.get('#app #copy').should('have.css', 'background-color', 'rgb(245, 245, 245)')
    })

    it('should have correct copy button positioning', () => {
        cy.get('#app #copy').distance('.add-filter', 'bottom').should('be.equal', 16)
        cy.get('#app #copy').distance('body', 'left').should('be.equal', 16)
    })

    it('should have correct import input styling', () => {
        cy.get('#app #import').invoke('outerWidth').should(x => expect(x).to.be.closeTo(234, 10))

        cy.get('#app #import')
            .should('have.css', 'border-width', '2px')
            .and('have.css', 'border-style', 'solid')
            .and('have.css', 'border-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-radius', '8px')

        cy.get('#app #import').should('have.css', 'padding', '8px 12px')

        cy.get('#app #import').should('have.css', 'background-color', 'rgb(255, 255, 255)')
        cy.get('#app #import').realHover()
        cy.get('#app #import').should('have.css', 'background-color', 'rgb(245, 245, 245)')
    })

    it('should have correct import input positioning', () => {
        cy.get('#app #import').distance('.add-filter', 'bottom').should('be.equal', 16)
        cy.get('#app #import').distance('#copy', 'right').should('be.equal', 16)
        cy.get('#app #import').distance('body', 'left').should(x => expect(x).to.be.closeTo(274, 20))
    })

    it('should have correct images positioning', () => {
        cy.get('#app .images').invoke('outerWidth').should(x => expect(x).to.be.closeTo(484, 20))
        cy.get('#app .images').distance('body', 'top').should(x => expect(x).to.be.closeTo(28, 10))
        cy.get('#app .images').distance('body', 'bottom').should(x => expect(x).to.be.closeTo(28, 10))
        cy.get('#app .images').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct before image styling', () => {
        cy.get('#app .image-wrapper:first-child canvas').distance('#app .image-wrapper:first-child', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:first-child canvas').distance('#app .image-wrapper:first-child', 'bottom').should(x => expect(x).to.be.closeTo(34, 4))

        cy.get('#app .image-wrapper:first-child p').distance('#app .image-wrapper:first-child', 'top').should(x => expect(x).to.be.closeTo(264, 20))
        cy.get('#app .image-wrapper:first-child p').distance('#app .image-wrapper:first-child', 'bottom').should('be.equal', 0)
    })

    it('should have correct before image positioning', () => {
        cy.get('#app .image-wrapper:first-child').invoke('outerWidth').should(x => expect(x).to.be.closeTo(264, 20))
        cy.get('#app .image-wrapper:first-child').invoke('outerHeight').should(x => expect(x).to.be.closeTo(298, 20))

        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'bottom').should(x => expect(x).to.be.closeTo(314, 20))
        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'left').then(left => {
            cy.get('#app .image-wrapper:first-child').distance('#app .images', 'right').then(right => {
                expect(left).to.be.closeTo(right, 10)
            })
        })
    })

    it('should have correct after image styling', () => {
        cy.get('#app .image-wrapper:last-child canvas').distance('#app .image-wrapper:last-child', 'top').should(x => expect(x).to.be.closeTo(34, 4))
        cy.get('#app .image-wrapper:last-child canvas').distance('#app .image-wrapper:last-child', 'bottom').should('be.equal', 0)

        cy.get('#app .image-wrapper:last-child p').distance('#app .image-wrapper:last-child', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:last-child p').distance('#app .image-wrapper:last-child', 'bottom').should(x => expect(x).to.be.closeTo(264, 20))
    })

    it('should have correct after image positioning', () => {
        cy.get('#app .image-wrapper:last-child').invoke('outerWidth').should(x => expect(x).to.be.closeTo(264, 20))
        cy.get('#app .image-wrapper:last-child').invoke('outerHeight').should(x => expect(x).to.be.closeTo(298, 20))

        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'top').should(x => expect(x).to.be.closeTo(314, 20))
        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'bottom').should('be.equal', 0)
        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'left').then(left => {
            cy.get('#app .image-wrapper:last-child').distance('#app .images', 'right').then(right => {
                expect(left).to.be.closeTo(right, 10)
            })
        })

        cy.get('#app .image-wrapper:last-child').distance('#app .image-wrapper:first-child', 'bottom').should('be.equal', 8)
    })

    it('should have correct image label styling', () => {
        cy.get('#app .image-wrapper p')
            .should('have.css', 'font-family', 'Inter, sans-serif')
            .and('have.css', 'font-size', '16px')
            .and('have.css', 'font-weight', '300')
            .and('have.css', 'letter-spacing', '0.64px')
            .and('have.css', 'text-transform', 'uppercase')

        // test first-letter styling if element
        cy.window().then((win) => {
            cy.get('#app .image-wrapper p').then(el => {
                const styles = win.getComputedStyle(el[0], '::first-letter')
                expect(styles['font-size']).to.equal('22.4px')
            })
        })

        cy.get('#app .image-wrapper p').distance('#app .image-wrapper', 'left').then(left => {
            cy.get('#app .image-wrapper p').distance('#app .image-wrapper', 'right').then(right => {
                expect(left).to.be.closeTo(right, 4)
            })
        })
    })
})

describe('UI App – Mobile' , () => {
    beforeEach(() => {
        cy.viewport(375, 667)
        cy.visit('/')
        cy.get('#image').selectFile('cypress/fixtures/mountain.png')
        // cy.wait(500)
    })

    afterEach(() => {
        // cy.wait(500)
    })

    it('should be centered', () => {
        cy.get('#app').distance('body', 'top').should('be.equal', 0)

        cy.get('#app').distance('body', 'left').then(left => {
            cy.get('#app').distance('body', 'right').then(right => {
                expect(left).to.be.closeTo(right, 10)
            })
        })
    })

    it('should have correct h1 positioning', () => {
        cy.get('#app h1').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))
        cy.get('#app h1').invoke('outerHeight').should(x => expect(x).to.be.closeTo(120, 20))

        cy.get('#app h1').distance('body', 'top').should('be.equal', 0)
        cy.get('#app h1').distance('body', 'left').should('be.equal', 16)
        cy.get('#app h1').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct filter select positioning', () => {
        cy.get('#app .add-filter').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))

        cy.get('#app .add-filter').distance('#app h1', 'bottom').should('be.equal', 8)
        cy.get('#app .add-filter').distance('body', 'left').should('be.equal', 16)
        cy.get('#app .add-filter').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct copy button positioning', () => {
        cy.get('#app #copy').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))

        cy.get('#app #copy').distance('.add-filter', 'bottom').should('be.equal', 16)
        cy.get('#app #copy').distance('body', 'left').should('be.equal', 16)
        cy.get('#app #copy').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct import input positioning', () => {
        cy.get('#app #import').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))

        cy.get('#app #import').distance('#copy', 'bottom').should('be.equal', 16)
        cy.get('#app #import').distance('body', 'left').should('be.equal', 16)
        cy.get('#app #import').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct images positioning', () => {
        cy.get('#app .images').invoke('outerWidth').should(x => expect(x).to.be.closeTo(343, 20))

        cy.get('#app .images').distance('#app .filters', 'bottom').should('be.equal', 32)

        cy.get('#app .images').distance('body', 'top').should(x => expect(x).to.be.closeTo(324, 20))
        cy.get('#app .images').distance('body', 'left').should('be.equal', 16)
        cy.get('#app .images').distance('body', 'right').should('be.equal', 16)
    })

    it('should have correct before image styling', () => {
        cy.get('#app .image-wrapper:first-child canvas').distance('#app .image-wrapper:first-child', 'top').should(x => expect(x).to.be.closeTo(34, 4))
        cy.get('#app .image-wrapper:first-child canvas').distance('#app .image-wrapper:first-child', 'bottom').should('be.equal', 0)

        cy.get('#app .image-wrapper:first-child p').distance('#app .image-wrapper:first-child', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:first-child p').distance('#app .image-wrapper:first-child', 'bottom').should(x => expect(x).to.be.closeTo(164, 20))
    })

    it('should have correct before image positioning', () => {
        cy.get('#app .image-wrapper:first-child').invoke('outerWidth').should(x => expect(x).to.be.closeTo(164, 20))
        cy.get('#app .image-wrapper:first-child').invoke('outerHeight').should(x => expect(x).to.be.closeTo(198, 20))

        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'right').should(x => expect(x).to.be.closeTo(180, 20))
        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'bottom').should('be.equal', 0)
        cy.get('#app .image-wrapper:first-child').distance('#app .images', 'left').should('be.equal', 0)

        cy.get('#app .image-wrapper:first-child').distance('#app .image-wrapper:last-child', 'left').should('be.equal', 16)
    })

    it('should have correct after image styling', () => {
        cy.get('#app .image-wrapper:last-child canvas').distance('#app .image-wrapper:last-child', 'top').should(x => expect(x).to.be.closeTo(34, 4))
        cy.get('#app .image-wrapper:last-child canvas').distance('#app .image-wrapper:last-child', 'bottom').should('be.equal', 0)

        cy.get('#app .image-wrapper:last-child p').distance('#app .image-wrapper:last-child', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:last-child p').distance('#app .image-wrapper:last-child', 'bottom').should(x => expect(x).to.be.closeTo(164, 20))
    })

    it('should have correct after image positioning', () => {
        cy.get('#app .image-wrapper:last-child').invoke('outerWidth').should(x => expect(x).to.be.closeTo(164, 20))
        cy.get('#app .image-wrapper:last-child').invoke('outerHeight').should(x => expect(x).to.be.closeTo(198, 20))

        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'top').should('be.equal', 0)
        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'right').should('be.equal', 0)
        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'bottom').should('be.equal', 0)
        cy.get('#app .image-wrapper:last-child').distance('#app .images', 'left').should(x => expect(x).to.be.closeTo(180, 20))

        cy.get('#app .image-wrapper:last-child').distance('#app .image-wrapper:first-child', 'right').should('be.equal', 16)
    })
})

describe('UI Interactions', () => {
    beforeEach(() => {
        cy.viewport(1000, 660)
        cy.visit('/')
        // cy.wait(500)
    })

    afterEach(() => {
        // cy.wait(500)
    })

    it('only shows the sections that are not hidden', () => {
        cy.get('#intro').should('be.visible')
        cy.get('#app').should('not.be.visible')

        cy.get('#image').selectFile('cypress/fixtures/mountain.png')

        cy.get('#intro').should('not.be.visible')
        cy.get('#app').should('be.visible')
    })

    it('should have correct filter select styling', () => {
        cy.get('#image').selectFile('cypress/fixtures/mountain.png')

        cy.get('#app .filters-list').invoke('outerWidth').should(x => expect(x).to.be.closeTo(484, 20))

        cy.get('#app .add-filter').distance('#app .filters-list', 'top').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'right').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'bottom').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'left').should('be.equal', 0)

        cy.get('#filter').select('gaussianBlur')

        cy.get('#app .add-filter').distance('#app .filters-list', 'top').should(x => expect(x).to.be.closeTo(44, 4))
        cy.get('#app .add-filter').distance('#app .filters-list', 'right').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'bottom').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'left').should('be.equal', 0)

        cy.get('#app .add-filter')
            .should('have.css', 'border-top-width', '0px')
            .and('have.css', 'border-right-width', '2px')
            .and('have.css', 'border-bottom-width', '2px')
            .and('have.css', 'border-left-width', '2px')
            .and('have.css', 'border-right-style', 'solid')
            .and('have.css', 'border-bottom-style', 'solid')
            .and('have.css', 'border-left-style', 'solid')
            .and('have.css', 'border-right-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-bottom-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-left-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-top-left-radius', '0px')
            .and('have.css', 'border-top-right-radius', '0px')
            .and('have.css', 'border-bottom-right-radius', '8px')
            .and('have.css', 'border-bottom-left-radius', '8px')

        cy.get('#app .add-filter').then(outer => {
            cy.get('#app .add-filter select').then(inner => {
                const getValue = (cssValue) => parseInt(cssValue.replace('px', ''), 10);
                const stylesOuter = cy.state('window').getComputedStyle(outer[0]);
                const stylesInner = cy.state('window').getComputedStyle(inner[0]);
                expect(getValue(stylesOuter.paddingTop) || getValue(stylesInner.paddingTop)).to.equal(8)
                expect(getValue(stylesOuter.paddingBottom) || getValue(stylesInner.paddingBottom)).to.equal(8)
                expect(getValue(stylesOuter.paddingLeft) || getValue(stylesInner.paddingLeft)).to.equal(12)
                expect(getValue(stylesOuter.paddingRight) || getValue(stylesInner.paddingRight)).to.equal(12)
            })
        })

        cy.get('#app .add-filter svg').invoke('outerWidth').should('be.equal', 16)
        cy.get('#app .add-filter svg').invoke('outerHeight').should('be.equal', 16)
        cy.get('#app .add-filter svg').distance('.add-filter', 'top').should(x => expect(x).to.be.closeTo(12, 2))
        cy.get('#app .add-filter svg').distance('.add-filter', 'bottom').should(x => expect(x).to.be.closeTo(14, 2))
        cy.get('#app .add-filter svg').distance('.add-filter', 'right').should(x => expect(x).to.be.closeTo(14, 2))

        cy.get('#filter').select('darken')

        cy.get('#app .add-filter').distance('#app .filters-list', 'top').should(x => expect(x).to.be.closeTo(86, 4))
        cy.get('#app .add-filter').distance('#app .filters-list', 'right').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'bottom').should('be.equal', 0)
        cy.get('#app .add-filter').distance('#app .filters-list', 'left').should('be.equal', 0)
    })

    it('should have correct filters styling', () => {
        cy.get('#image').selectFile('cypress/fixtures/mountain.png')

        cy.get('#app .filters-list').invoke('outerWidth').should(x => expect(x).to.be.closeTo(484, 20))

        cy.get('#filter').select('gaussianBlur')

        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'top').should('be.equal', 0)
        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'right').should('be.equal', 0)
        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'bottom').should(x => expect(x).to.be.closeTo(42, 4))
        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'left').should('be.equal', 0)

        cy.get('#app .filter:first-of-type')
            .should('have.css', 'border-top-width', '2px')
            .and('have.css', 'border-right-width', '2px')
            .and('have.css', 'border-bottom-width', '2px')
            .and('have.css', 'border-left-width', '2px')
            .and('have.css', 'border-top-style', 'solid')
            .and('have.css', 'border-right-style', 'solid')
            .and('have.css', 'border-bottom-style', 'solid')
            .and('have.css', 'border-left-style', 'solid')
            .and('have.css', 'border-top-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-right-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-bottom-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-left-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-top-left-radius', '8px')
            .and('have.css', 'border-top-right-radius', '8px')
            .and('have.css', 'border-bottom-right-radius', '0px')
            .and('have.css', 'border-bottom-left-radius', '0px')

        cy.get('#filter').select('darken')

        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'top').should('be.equal', 0)
        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'right').should('be.equal', 0)
        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'bottom').should(x => expect(x).to.be.closeTo(84, 4))
        cy.get('#app .filter:first-of-type').distance('#app .filters-list', 'left').should('be.equal', 0)

        cy.get('#app .filter:nth-of-type(2)').distance('#app .filters-list', 'top').should(x => expect(x).to.be.closeTo(44, 4))
        cy.get('#app .filter:nth-of-type(2)').distance('#app .filters-list', 'right').should('be.equal', 0)
        cy.get('#app .filter:nth-of-type(2)').distance('#app .filters-list', 'bottom').should(x => expect(x).to.be.closeTo(42, 4))
        cy.get('#app .filter:nth-of-type(2)').distance('#app .filters-list', 'left').should('be.equal', 0)

        cy.get('#app .filter:nth-of-type(2)')
            .should('have.css', 'border-top-width', '0px')
            .and('have.css', 'border-right-width', '2px')
            .and('have.css', 'border-bottom-width', '2px')
            .and('have.css', 'border-left-width', '2px')
            .and('have.css', 'border-right-style', 'solid')
            .and('have.css', 'border-bottom-style', 'solid')
            .and('have.css', 'border-left-style', 'solid')
            .and('have.css', 'border-right-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-bottom-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-left-color', 'rgb(221, 221, 221)')
            .and('have.css', 'border-top-left-radius', '0px')
            .and('have.css', 'border-top-right-radius', '0px')
            .and('have.css', 'border-bottom-right-radius', '0px')
            .and('have.css', 'border-bottom-left-radius', '0px')
    })

    it('should have correct filter remove button styling', () => {
        cy.get('#image').selectFile('cypress/fixtures/mountain.png')

        cy.get('#filter').select('gaussianBlur')

        cy.get('#app .add-filter').then(outer => {
            cy.get('#app .add-filter select').then(inner => {
                const getValue = (cssValue) => parseInt(cssValue.replace('px', ''), 10);
                const stylesOuter = cy.state('window').getComputedStyle(outer[0]);
                const stylesInner = cy.state('window').getComputedStyle(inner[0]);
                expect(getValue(stylesOuter.paddingTop) || getValue(stylesInner.paddingTop)).to.equal(8)
                expect(getValue(stylesOuter.paddingBottom) || getValue(stylesInner.paddingBottom)).to.equal(8)
                expect(getValue(stylesOuter.paddingLeft) || getValue(stylesInner.paddingLeft)).to.equal(12)
                expect(getValue(stylesOuter.paddingRight) || getValue(stylesInner.paddingRight)).to.equal(12)
            })
        })

        cy.get('#app .filter:first-of-type svg').invoke('outerWidth').should('be.equal', 20)
        cy.get('#app .filter:first-of-type svg').invoke('outerHeight').should('be.equal', 20)
        cy.get('#app .filter:first-of-type svg').distance('.filter:first-of-type', 'top').should(x => expect(x).to.be.closeTo(12, 2))
        cy.get('#app .filter:first-of-type svg').distance('.filter:first-of-type', 'bottom').should(x => expect(x).to.be.closeTo(12, 2))
        cy.get('#app .filter:first-of-type svg').distance('.filter:first-of-type', 'right').should(x => expect(x).to.be.closeTo(14, 2))

        cy.get('#app .filter:first-of-type svg').should('have.css', 'color', 'rgb(215, 0, 0)')
        cy.get('#app .filter:first-of-type button').realHover()
        cy.get('#app .filter:first-of-type svg').should('have.css', 'color', 'rgb(167, 0, 0)')

        cy.get('#filter').select('darken')

        cy.get('#app .filter:first-of-type svg').invoke('outerWidth').should('be.equal', 20)
        cy.get('#app .filter:first-of-type svg').invoke('outerHeight').should('be.equal', 20)
        cy.get('#app .filter:first-of-type svg').distance('.filter:first-of-type', 'top').should(x => expect(x).to.be.closeTo(12, 2))
        cy.get('#app .filter:first-of-type svg').distance('.filter:first-of-type', 'bottom').should(x => expect(x).to.be.closeTo(12, 2))
        cy.get('#app .filter:first-of-type svg').distance('.filter:first-of-type', 'right').should(x => expect(x).to.be.closeTo(14, 2))

        cy.get('#app .filter:nth-of-type(2) svg').invoke('outerWidth').should('be.equal', 20)
        cy.get('#app .filter:nth-of-type(2) svg').invoke('outerHeight').should('be.equal', 20)
        cy.get('#app .filter:nth-of-type(2) svg').distance('.filter:nth-of-type(2)', 'top').should(x => expect(x).to.be.closeTo(10, 2))
        cy.get('#app .filter:nth-of-type(2) svg').distance('.filter:nth-of-type(2)', 'bottom').should(x => expect(x).to.be.closeTo(12, 2))
        cy.get('#app .filter:nth-of-type(2) svg').distance('.filter:nth-of-type(2)', 'right').should(x => expect(x).to.be.closeTo(14, 2))
    })
})
