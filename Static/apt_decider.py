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

# Example usage
if __name__ == "__main__":
    apartments = []

    # Creating some apartments
    apt1 = Apartment("Apartment 1")
    apt1.add_pro("Close to work")
    apt1.add_pro("Spacious")
    apt1.add_con("Expensive")

    apt2 = Apartment("Apartment 2")
    apt2.add_pro("Affordable")
    apt2.add_con("Far from work")
    apt2.add_con("Noisy neighborhood")

    apt3 = Apartment("Apartment 3")
    apt3.add_pro("Great view")
    apt3.add_pro("Quiet neighborhood")
    apt3.add_con("Small rooms")

    # Adding apartments to the list
    apartments.append(apt1)
    apartments.append(apt2)
    apartments.append(apt3)

    # Finding the best apartment
    best_apartment = get_best_apartment(apartments)

    if best_apartment:
        print(f"The best apartment is {best_apartment.name} with a score of {best_apartment.score()}.")
    else:
        print("No apartments available.")
