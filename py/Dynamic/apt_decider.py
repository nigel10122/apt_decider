class Apartment:
    def __init__(self, name):
        self.name = name
        self.pros = []
        self.cons = []

    def add_pro(self, pro):
        self.pros.append(pro)

    def add_con(self, con):
        self.cons.append(con)

    def score(self):
        return len(self.pros) - len(self.cons)

def get_best_apartment(apartments):
    best_apartment = None
    highest_score = float('-inf')

    for apartment in apartments:
        apartment_score = apartment.score()
        print(f"{apartment.name} has a score of {apartment_score}.")
        if apartment_score > highest_score:
            highest_score = apartment_score
            best_apartment = apartment

    return best_apartment

def main():
    apartments = []

    while True:
        name = input("Enter the name of the apartment (or type 'done' to finish): ")
        if name.lower() == 'done':
            break

        apartment = Apartment(name)

        while True:
            pro = input(f"Enter a pro for {name} (or type 'done' to stop adding pros): ")
            if pro.lower() == 'done':
                break
            apartment.add_pro(pro)

        while True:
            con = input(f"Enter a con for {name} (or type 'done' to stop adding cons): ")
            if con.lower() == 'done':
                break
            apartment.add_con(con)

        apartments.append(apartment)

    if apartments:
        best_apartment = get_best_apartment(apartments)
        if best_apartment:
            print(f"The best apartment is {best_apartment.name} with a score of {best_apartment.score()}.")
    else:
        print("No apartments available.")

if __name__ == "__main__":
    main()
